#!/usr/bin/env node

import { fileURLToPath } from "url";
import * as path from "path";
import fs from "fs-extra";
import meow from "meow";
import { execSync } from "child_process";

const help = `
  Usage:
    $ npx create-cospace [flags...] [<dir>]

  If <dir> is not provided, will default to current dir.

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

const init = async () => {
  const { input, flags, showHelp, showVersion } = meow(help, {
    importMeta: import.meta,
    booleanDefault: undefined,
    flags: {
      help: { type: "boolean", default: false, alias: "h" },
      version: { type: "boolean", default: false, alias: "v" },
    },
  });

  if (flags.help) showHelp();
  if (flags.version) showVersion();

  checkPnpmInstalled();

  const cospaceDir = input[0] || ".";

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

  console.log(
    "Your CoSpace has been initialized! Look at the Readme, setup your CoSpace, install, and you're good to go!"
  );
};

init().catch(console.error);
