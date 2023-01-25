import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Expressss + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Servers is running at http://localhost:${port}`);
});