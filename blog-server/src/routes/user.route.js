import { Router } from "express";
import { createUser } from "../controller/user.controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.post("/create", asyncHandler(createUser));

// 1-case : fn-[createUser] ->  asyncHandler(createUser) -> resolve -> asyncedCreateUser
// 2-case : fn-[createUser] ->  asyncHandler(createUser) -> reject -> error throw

export default router;
