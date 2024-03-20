import express from "express";
import { config } from "dotenv";
config();
import authRoute from "../router/auth.route.js";
import errorMiddleware from "../middleware/error.middleware.js";
const app = express();

//middleware
app.use(express.json());

app.use("/api/auth", authRoute);

// error middleware
app.use(errorMiddleware);

export default app;
