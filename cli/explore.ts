import open from "open";
import http from "node:http";
// import fs from "node:fs";
import handler from "serve-handler";

import {
  getWorkspaceRoot,
  getWorkspaces,
  type PnpmLockFile,
} from "workspace-tools";
import { parsePnpmLock } from "workspace-tools/lib/lockfile/parsePnpmLock.js";
import { readYaml } from "workspace-tools/lib/lockfile/readYaml.js";

// import yaml from "yaml";
// import yaml from "js-yaml";

export const explore = async () => {
  const PORT = 8765;
  const SERVICE_URL = `http://localhost:${PORT}`;

  const server = http.createServer((req, res) => {
    // cors
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");

    if (req.url === "/api/lockfile") {
      console.log("attempt to fetch lockfile");
      const cospaceRoot = getWorkspaceRoot(process.cwd(), "pnpm");

      const lockfilePath = `${cospaceRoot}/pnpm-lock.yaml`;
      // const lockfile = yaml.load(fs.readFileSync(lockfilePath, "utf8"));

      const yaml = readYaml<PnpmLockFile>(lockfilePath);
      const { object: lockfile } = parsePnpmLock(yaml);

      const workspaces = getWorkspaces(cospaceRoot!);
      // console.log({ workspaces, lockfile });

      return res
        .writeHead(200)
        .end(JSON.stringify({ workspaces, lockfile }), "utf8");
    }

    return handler(req, res, {
      public: "../explorer-react/dist",
    });
  });

  server.listen({ port: PORT }, async () => {
    console.log(`Listening on ${SERVICE_URL}`);
    // await open(SERVICE_URL);
  });
};
