#!/usr/bin/env node

import { fileURLToPath } from "url";
import * as path from "path";
import fs from "fs-extra";
import meow from "meow";
import { execSync } from "child_process";

const Actions = {
  INIT: "init",
  OVERRIDE: "override",
  PURGE: "purge",
}

const help = `
  Usage:
    $ npx cospace <command> [<args>] 

  Commands:
    ${Actions.INIT} <dir>          Initialize a new CoSpace

        If <dir> is not provided, will default to current dir

    ${Actions.OVERRIDE}            Override the CoSpace's pnpm config
    ${Actions.PURGE}               Purge all node_modules from the CoSpace

  Flags:
    --help, -h          Show this help message
    --version, -v       Show the version of this script
`;

const checkPnpmInstalled = () => {
  try {
    execSync("pnpm -v", { stdio: "ignore" });
  } catch (e) {
    console.error(
      "Please install pnpm using 'npm install -g pnpm' before using this script"
    );
    process.exit(1);
  }
};

const init = async (cospaceDir = ".") => {
  const relativeDir = path.relative(process.cwd(), cospaceDir);
  if (relativeDir !== "") {
    if (fs.existsSync(cospaceDir)) {
      console.log(
        `️Oops, "${relativeDir}" already exists. Please try again with a different directory.`
      );
      process.exit(1);
    } else {
      await fs.mkdir(cospaceDir);
    }
  }

  console.log(`\nCreating cospace in ${cospaceDir}...`);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  await fs.copy(path.join(__dirname, "./template"), cospaceDir);

  process.chdir(cospaceDir);
  try {
    execSync("pnpm i");
  } catch (e) {
    console.error("Failed to install, please run install prior to CoSpace use");
  }

  console.log(
    "Your CoSpace has been initialized! Look at the Readme, setup your CoSpace, install, build and you're good to go!"
  );
};

const overridePnpm = async () => {
  const pkgJsonPath = "package.json";

  const overrides = JSON.parse(
    execSync("pnpm ls -r --depth -1 --json", {
      encoding: "utf8",
    })
  )
    .map((pkg) => {
      if (!pkg.private) return pkg.name;
    })
    .filter((name) => name)
    .sort()
    .reduce((overrides, name) => {
      overrides[name] = "workspace:*";
      return overrides;
    }, {});

  const pkgJsonData = await fs.readJSON(pkgJsonPath);

  pkgJsonData.pnpm.overrides = overrides;

  await fs.writeJSON(pkgJsonPath, pkgJsonData, { spaces: 2 });

  console.log(
    "Your CoSpace's workspace links have been overriden. Run `pnpm install`, `pnpm build` and you're good to go!"
  );
};

const purge = async () => {
  const paths = JSON.parse(
    execSync("pnpm ls -r --depth -1 --json", {
      encoding: "utf8",
    })
  ).map((pkg) => pkg.path);

  await Promise.all(
    paths.map((p) => {
      const nodeModulesPath = path.join(p, "node_modules");
      console.log(`Purging ${nodeModulesPath}`);
      return fs.remove(nodeModulesPath, (err) => {
        if (err) console.error(err);
      });
    })
  );

  console.log("All node_modules have been purged from the CoSpace.");
};

const run = async () => {
  const { input, flags, showHelp, showVersion } = meow(help, {
    importMeta: import.meta,
    flags: {
      help: { type: "boolean", default: false, alias: "h" },
      version: { type: "boolean", default: false, alias: "v" },
    },
  });

  if (flags.help || !input.length) showHelp();
  if (flags.version) showVersion();

  checkPnpmInstalled();

  switch (input[0]) {
    case Actions.INIT:
      return await init(input[1]);
    case Actions.OVERRIDE:
      return await overridePnpm();
    case Actions.PURGE:
      return await purge();
    default:
      console.error(
        `Unrecognized command, ${input[0]}, please try again with --help for more info.`
      );
  }
};

run().catch(console.error);
