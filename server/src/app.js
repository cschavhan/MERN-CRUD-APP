import express from "express";
import { config } from "dotenv";
config();
import authRoute from "../router/auth.route.js";
import contactRoute from "../router/contact.route.js";
import serviceRoute from "../router/service.route.js";
import adminRoute from "../router/admin.route.js";
import errorMiddleware from "../middleware/error.middleware.js";
import cors from "cors";
const app = express();

// connect frontend to backend
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

//middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// error middleware
app.use(errorMiddleware);

export default app;
