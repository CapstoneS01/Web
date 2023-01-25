import express, { Express} from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import auth from "./routers/auth";
import upload from "./routers/upload";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use('/auth', auth);
app.use('/upload', upload)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
