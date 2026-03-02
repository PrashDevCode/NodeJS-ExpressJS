import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/users", userRoutes);

export default app;