import { createUserService } from "../services/user.services.js";

export const createUser = async (req, res) => {
  const data = req.body;
  const result = await createUserService({ user: data });
  return res.json({ data: result, message: "user created" });
};
