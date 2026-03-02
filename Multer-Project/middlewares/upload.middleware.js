import multer from "multer";
import fs from "fs";

//  CREATE FOLDERS IF NOT EXIST........

const imagePath = "uploads/images";
const resumePath = "uploads/resumes";

if (!fs.existsSync(imagePath)) fs.mkdirSync(imagePath, { recursive: true });
if (!fs.existsSync(resumePath)) fs.mkdirSync(resumePath, { recursive: true });

// STORAGE CONFIG..........

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "profileImage") {
      cb(null, imagePath);
    } else if (file.fieldname === "resume") {
      cb(null, resumePath);
    }
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

//  FILE FILTER...............

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "profileImage") {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only JPG and PNG allowed"), false);
    }
  }

  if (file.fieldname === "resume") {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed"), false);
    }
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;
