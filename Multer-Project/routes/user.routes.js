import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { uploadUserFiles } from "../controllers/user.controller.js";

const router = express.Router();

router.post(
  "/upload",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  uploadUserFiles
);

export default router;