import { User } from "../models/user.model.js";

export const createUserService = async ({ user }) => {
  const result = await User.create(user);
  // user pehle se to nahi hai
  // user password hash 
  // email send
  return result;
};

// 20 -> code 
// 80 -> system design