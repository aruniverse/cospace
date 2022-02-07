"use strict";

const { readFileSync, writeFileSync } = require("fs");
const { execSync } = require("child_process");

const pkgJsonPath = "package.json";

const overrides = JSON.parse(
  execSync("pnpm ls -r --depth -1 --json", {
    encoding: "utf8",
  })
)
  .map((pkg) => {
    if (!pkg.private) {
      return pkg.name;
    }
  })
  .filter((name) => name)
  .reduce((overrides, name) => {
    overrides[name] = "workspace:*";
    return overrides;
  }, {});

const pkgJsonData = JSON.parse(readFileSync(pkgJsonPath, { encoding: "utf8" }));

pkgJsonData.pnpm.overrides = overrides;

writeFileSync(pkgJsonPath, JSON.stringify(pkgJsonData, null, 2) + "\n");
