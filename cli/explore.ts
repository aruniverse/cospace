import open from "open";
import http from "node:http";

export const explore = async () => {
  const PORT = 8765;
  const SERVICE_URL = `http://localhost:${PORT}`;

  const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
      // const html = renderClient({
      //   title: "pnpm workspace graph",
      //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      //   viewerData: this._viewerData!,
      //   enableWebSocket: true,
      // });
      res.writeHead(200, { "Content-Type": "text/html" });
      // res.end(html);
    } else {
      // sirvMiddleware(req, res);
    }
  });

  server.listen({ port: PORT }, async () => {
    console.log(`Listening on ${SERVICE_URL}`);
    await open(SERVICE_URL);
  });
};
