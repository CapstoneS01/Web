import express from "express";
import { PrismaClient } from "@prisma/client";
import { ulid, decodeTime } from "ulid";
import jwt from "jsonwebtoken";

const router = express.Router();
const prisma = new PrismaClient();
const port = process.env.PORT;
const secret = process.env.JWT_SECRET as string;

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.post("/login", async (req, res) => {
  const { email } = req.body;
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
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
  const client_token = jwt.sign({ token }, secret);

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
    htmlContent: `<a href='http://localhost:${port}/auth/verify?token=${client_token}'>Click here to log in</a>`,
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

    if (!email.ok) throw new Error("Unable to send login link");
  } catch (err) {
    return res.status(400).send((<Error>err).message);
  }

  return res.send(client_token);
});

router.get("/verify", async (req, res) => {
  const { token: client_token } = req.query;

  if (!client_token || typeof client_token !== "string") {
    return res.status(401).send("Invalid or expired token.");
  }

  try {
    const { token } = jwt.verify(client_token, secret) as { token: string };

    const user = await prisma.user.findFirst({
      where: { token },
    });

    if (!user) {
      return res.status(401).send("Invalid token");
    }

    if (new Date() > user.expiresAt) {
      return res.status(401).send("Token expired");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { verified: true },
    });

    req.user = user.email;
    res.cookie("token", client_token, { httpOnly: true, secure: true });
    res.send("success");
  } catch (err) {
    return res.status(401).send((<Error>err).message);
  }
});

export default router;
