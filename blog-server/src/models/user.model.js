import mongoose from "mongoose";

// USER :
// {
//     email:"abc@gmail.com",
//     name:"abc",
//     password:"12345",
//     created_at:"time",
//     updated_at:"time"
// }

// create schema
const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// create model
export const User =
  mongoose.models.User || new mongoose.model("User", userSchema);
