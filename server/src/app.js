import express from "express";
import { config } from "dotenv";
config();
import authRoute from "../router/auth.route.js";
const app = express();

app.use("/api/auth", authRoute);

export default app;
