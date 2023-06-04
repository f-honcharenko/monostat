import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectOptions, connect } from "mongoose";
import { json, urlencoded } from "body-parser";

import authRouter from "@routes/authRoutes";

dotenv.config();

const app = express();

// Connect to MongoDB
connect(
  process.env.MONGODB_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/auth", authRouter);
// app.use("/users", userRouter);

//The 404 handling middleware
app.get("*", (_req: Request, res: Response): void => {
  res.status(404).send("404");
  return;
});

// Error handling middleware
app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
);

export default app;
