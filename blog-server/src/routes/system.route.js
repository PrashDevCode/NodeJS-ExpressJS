import { Router } from "express";
import { getSystemHealth } from "../controller/system.controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const router = Router();

router.get("/health", asyncHandler(getSystemHealth));

export default router;
