import express, { Express} from "express";
import dotenv from "dotenv";

import auth from "./routers/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Expressss + TypeScript Server");
});

app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
