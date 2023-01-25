import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { ulid, decodeTime } from "ulid";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
  res.send("Expressss + TypeScript Server");
});

app.post("/login", async (req, res, next) => {
  const { email } = req.body;
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    console.log("NEW USER CREATED");
    user = await prisma.user.create({
      data: {
        email,
        token: "",
        expiresAt: new Date(0),
        verified: false,
      },
    });
  }

  const token = ulid();
  const expiresAt = new Date(decodeTime(token));
  expiresAt.setHours(expiresAt.getHours() + 1);

  await prisma.user.update({
    where: { id: user.id },
    data: { token, expiresAt },
  });

  const emailData = {
    to: [{ email, name: "SkyHunt User" }],
    sender: {
      name: "SkyHunt",
      email: "skyhunt@mcmaster.ca",
    },
    subject: "Login link",
    htmlContent: `<a href='http://localhost:${port}/verify?token=${token}'>Click here to log in</a>`,
  };

  const fetchHeaders = new Headers({
    accept: "application/json",
    "content-type": "application/json",
    "api-key": process.env.SIBKEY as string,
  });

  try {
    const email = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: fetchHeaders,
    });
    
    if(!email.ok) throw new Error("Unable to send login link");
  } catch (err) {
    return res.status(400).send("Unable to login");
  } 

  return res.send("Success");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
