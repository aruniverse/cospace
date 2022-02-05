"use strict";

const fs = require("fs");
const fg = require("fast-glob");

const pkgJsonPath = "package.json";

const overrides = fg
  .sync("**/package.json", {
    ignore: ["**/node_modules/**"],
  })
  .map((entry) => {
    const pkg = JSON.parse(fs.readFileSync(entry));
    if (!pkg.private) {
      return pkg.name;
    }
  })
  .filter((name) => name)
  .reduce((overrides, name) => {
    overrides[name] = "workspace:*";
    return overrides;
  }, {});

const pkgJsonData = JSON.parse(
  fs.readFileSync(pkgJsonPath, { encoding: "utf8" })
);

pkgJsonData.pnpm.overrides = overrides;

fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJsonData, null, 2) + "\n");
