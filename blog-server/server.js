import express from "express";
import "dotenv/config.js";
import cors from "cors";
import { connectDb } from "./src/db/connect-db.js";
import userRouter from "./src/routes/user.route.js";
import systemRouter from "./src/routes/system.route.js";
import { getUsers } from "./src/controller/getUsers.js";
 
const app = express();

connectDb();

// middleware
app.use(cors());
app.use(express.json());

// routes [ through middleware ]
app.use("/api/v1/user", userRouter);
app.use("/api/v1/system", systemRouter);

// middleware for [ global ] error handling
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


app.get("/users" , getUsers )
// method -> get , /users 
// server kaha chalana hai
app.listen(process.env.PORT, () => console.log("Server is running on " + process.env.PORT));
