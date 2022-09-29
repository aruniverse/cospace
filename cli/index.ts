#!/usr/bin/env node

import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";
import { globby } from "globby";
import meow from "meow";

// since __filename and __dirname are undefined for esm, define ourselves
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_JSON = "package.json";
const WORKSPACE_VERSION = "workspace:*";
const PNPM_LOCKFILE = "pnpm-lock.yaml";
const RUSH_JSON = "rush.json";

interface PnpmPackageInfo {
  name: string;
  version: string;
  private: boolean;
  path: string;
}

const enum Commands {
  INIT = "init",
  OVERRIDE = "override",
  PURGE = "purge",
  UPDATE_LOCKFILE = "update-lockfile",
}

const help = `
  Usage:
    $ npx cospace <command> [<args>] 

  Commands:
    ${Commands.INIT} <dir>          Initialize a new CoSpace

        If <dir> is not provided, will default to the current directory

    ${Commands.OVERRIDE}            Override the CoSpace's pnpm config
    ${Commands.PURGE}               Purge all node_modules from the CoSpace
    ${Commands.UPDATE_LOCKFILE}     Update pnpm lockfiles found in the CoSpace

  Flags:
    --help, -h          Show this help message
    --version, -v       Show the version of this script

    --includePrivate    Add private packages to CoSpace's pnpm overrides
`;

let pnpmStorePath = "";
const checkPnpmInstalled = () => {
  try {
    pnpmStorePath = execSync("pnpm store path", { encoding: "utf8" });
  } catch {
    console.error(
      "Please install pnpm before using CoSpace, see https://pnpm.io/installation"
    );
    process.exit(1);
  }
};

const init = async (cospaceDir = ".") => {
  const relativeDir = path.relative(process.cwd(), cospaceDir);
  if (!relativeDir) {
    if (fs.existsSync(cospaceDir)) {
      console.log(
        `️Oops, "${relativeDir}" already exists. Please try again with a different directory.`
      );
      process.exit(1);
    } else {
      await fs.mkdir(cospaceDir);
    }
  }

  console.log(`\nCreating CoSpace in ${cospaceDir}...`);
  await fs.copy(path.join(__dirname, "./template"), cospaceDir);
  process.chdir(cospaceDir);
  await fs.mkdir("repos");
  try {
    execSync("pnpm i");
  } catch {
    console.error("Failed to install, please run install prior to CoSpace use");
  }

  console.log(
    "Your CoSpace has been initialized! Look at the Readme, setup your CoSpace, install, build and you're good to go!"
  );
};

const getWorkspacePkgs = (): PnpmPackageInfo[] => {
  return JSON.parse(
    execSync("pnpm ls -r --depth -1 --json", {
      encoding: "utf8",
    })
  );
};

const overridePnpm = async (includePrivate: boolean) => {
  const pkgJsonData = await fs.readJSON(PACKAGE_JSON);
  if (!pkgJsonData.pnpm) {
    pkgJsonData.pnpm = {};
  }
  const currentOverrides = pkgJsonData?.pnpm?.overrides ?? {};

  const cospaceOverrides = getWorkspacePkgs()
    .map((pkg) => {
      return !pkg.private || (includePrivate && pkg.private) ? pkg.name : "";
    })
    .filter((name) => name)
    .sort()
    .reduce((overrides: { [pkgName: string]: string }, name: string) => {
      overrides[name] = WORKSPACE_VERSION;
      return overrides;
    }, {});

  const userOverrides = Object.fromEntries(
    Object.entries(currentOverrides).filter(([_pkgName, version]) => {
      return version !== WORKSPACE_VERSION;
    })
  );

  const overrides = { ...cospaceOverrides, ...userOverrides };

  pkgJsonData.pnpm.overrides = overrides;
  await fs.writeJSON(PACKAGE_JSON, pkgJsonData, { spaces: 2 });

  console.log(
    "Your CoSpace's workspace links have been overriden. Run `pnpm install`, `pnpm build` and you're good to go!"
  );

  const cur = Object.keys(currentOverrides);
  const next = Object.keys(overrides);

  const removed = cur.filter((name) => !next.includes(name));
  const added = next.filter((name) => !cur.includes(name));

  if (removed.length) {
    console.log(
      `\nYou removed the following packages from your CoSpace:\n- ${removed.join(
        "\n- "
      )}`
    );
  }
  if (added.length) {
    console.log(
      `\nYou added the following packages to your CoSpace:\n+ ${added.join(
        "\n+ "
      )}`
    );
  }
};

const purge = async () => {
  await Promise.all(
    getWorkspacePkgs().map((pkg) => {
      const nodeModulesPath = path.join(pkg.path, "node_modules");
      console.log(`Purging ${nodeModulesPath}`);
      return fs.remove(nodeModulesPath);
    })
  );

  console.log("All node_modules have been purged from the CoSpace.");
};

const updateLockfile = async () => {
  const lockfiles = await globby(
    [
      `**/${PNPM_LOCKFILE}`,
      `!**/rush/${PNPM_LOCKFILE}`,
      `**/${RUSH_JSON}`,
      // "**/package-lock.json",
      // "**/yarn.lock",
    ],
    {
      absolute: true,
      cwd: "./repos/",
      ignore: ["**/node_modules/**"],
      objectMode: true,
    }
  );

  let rush_update_cmd = "rush update";
  if (lockfiles.some((l) => l.name === RUSH_JSON)) {
    try {
      execSync("rush -h", { stdio: "ignore" });
    } catch {
      rush_update_cmd = "pnpm dlx @microsoft/rush update";
    }
  }

  for (const lockfile of lockfiles) {
    try {
      console.log(`Updating ${lockfile.path}`);
      process.chdir(path.join(lockfile.path, ".."));
      switch (lockfile.name) {
        case PNPM_LOCKFILE:
          execSync("pnpm i --lockfile-only", { stdio: "inherit" });
          break;
        case RUSH_JSON:
          execSync(rush_update_cmd, {
            stdio: "inherit",
            env: { ...process.env, RUSH_PNPM_STORE_PATH: pnpmStorePath },
          });
          break;
      }
    } catch (e) {
      console.log((e as Error).message);
    }
  }
};

const run = async () => {
  const { input, flags, showHelp, showVersion } = meow(help, {
    importMeta: import.meta,
    allowUnknownFlags: false,
    flags: {
      help: { type: "boolean", default: false, alias: "h" },
      version: { type: "boolean", default: false, alias: "v" },
      includePrivate: { type: "boolean", default: false },
    },
  });

  if (flags.help || !input.length) showHelp();
  if (flags.version) showVersion();

  checkPnpmInstalled();

  const [command, ...args] = input;

  switch (command) {
    case Commands.INIT:
      return await init(args[0]);
    case Commands.OVERRIDE:
      return await overridePnpm(flags.includePrivate);
    case Commands.PURGE:
      return await purge();
    case Commands.UPDATE_LOCKFILE:
      return await updateLockfile();
    default:
      console.error(
        `Unrecognized command, "${command}", please try again with --help for more info.`
      );
  }
};

run().catch(console.error);
