import express, { application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./route/auth.routes.js";
import clientRoutes from "./route/client.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//utilizamos el archivo de rutas
app.use("/api", authRoutes);
app.use("/api", clientRoutes);

export default app;
