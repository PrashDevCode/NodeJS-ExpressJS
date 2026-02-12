import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { dbName: "blog-server" });
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.log("DATABASE_ERROR : ", error);
  }
};
