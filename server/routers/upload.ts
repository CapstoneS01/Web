import express, { Request } from "express";
import multer, { Options } from "multer";
import path from "path";

import isAuthenticated from "../middleware/isAuthenticated";

type Limits = Options["limits"];

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(".")[0];
    cb(null, fileName + "_" + Date.now() + path.extname(file.originalname));
  },
});
const limits: Limits = { fileSize: 10 * 1024 * 1024, files: 20 };
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, limits, fileFilter });

router.post("/", isAuthenticated, upload.any(), async (req, res) => {
  res.send("Files uploaded");
});

export default router;
