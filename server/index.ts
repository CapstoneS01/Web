import express, { Express} from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import auth from "./routers/auth";
import upload from "./routers/upload";
import notification from "./routers/notification";

declare global {
  namespace Express {
    interface Request {
      user: string
    }
  }
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use('/auth', auth);
app.use('/upload', upload)
app.use('/notification', notification)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
