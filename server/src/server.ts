import express, { Request, Response } from "express";

import morgan from "morgan";
import cors from "cors";
import todoRouter from "./routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "RASENGAN" });
});

app.use("/todo", todoRouter);

export default app;
