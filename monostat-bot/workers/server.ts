//server for webhooks from mono-api
import express, { Express, Request, Response } from "express";

const port: number = 3001;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  const ip: string = String(
    req.headers["x-forwarded-for"] || req.socket.remoteAddress
  );
  const browser: string = String(req.headers["user-agent"]);
  return res.status(200).json({ ip, browser });
});

app.listen(port, () => {
  return console.log(`⚡️[bot]: Server is running at http://localhost:${port}`);
});
