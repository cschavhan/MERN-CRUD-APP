import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
