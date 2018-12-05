import * as express from "express";
import * as next from "next";
import * as proxy from "http-proxy-middleware";
import { IncomingMessage, ServerResponse } from "http";

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const main = async () => {
    await app.prepare();
    const server = express();

    // Proxy Setting
    const options = {
        target: "http://java-api-server:8081",
        changeOrigin: false,
        ws: false // proxy websockets
    };
    server.use("/api", proxy(options));

    // Next.js Handling
    server.get("*", (req: IncomingMessage, res: ServerResponse) => {
        return handle(req, res);
    });

    server.listen(PORT, (err: Error) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${PORT}`);
    });
};

main();
