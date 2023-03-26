import express, { Request } from "express";
import multer, { Options } from "multer";
import { spawn } from "child_process";

import isAuthenticated from "../middleware/isAuthenticated";

type Limits = Options["limits"];

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../ObjectDetection/face_recognition/recognition/dataset");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const limits: Limits = { fileSize: 100 * 1024 * 1024, files: 20 };
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

const upload = multer({ storage, limits, fileFilter }).array("images");

router.post("/", isAuthenticated, async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send(err.message);
    }
    const child = spawn('python', ['../../ObjectDetection/face_recognition/recognition/encode_faces.py']);
    child.stdout.on('data', (data) => {
      console.log(`stdout:\n${data}`);
    });

    res.send("Files uploaded and encoding generated");
  });
});

export default router;
