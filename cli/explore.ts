import open from "open";
import http from "node:http";
import fs from "node:fs";
import handler from "serve-handler";

import { getWorkspaceRoot } from "workspace-tools";
// import yaml from "yaml";
import yaml from "js-yaml";

export const explore = async () => {
  const PORT = 8765;
  const SERVICE_URL = `http://localhost:${PORT}`;

  const server = http.createServer((req, res) => {
    if (req.url === "/api/lockfile") {
      console.log("attempt to fetch lockfile");
      const cospaceRoot = getWorkspaceRoot(process.cwd(), "pnpm");
      const lockfile = yaml.load(
        fs.readFileSync(`${cospaceRoot}/pnpm-lock.yaml`, "utf8")
      );

      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(lockfile), "utf8");
    }

    return handler(req, res, {
      public: "../explorer-react/dist",
    });
  });

  server.listen({ port: PORT }, async () => {
    console.log(`Listening on ${SERVICE_URL}`);
    await open(SERVICE_URL);
  });
};
