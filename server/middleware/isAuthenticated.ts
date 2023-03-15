import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function (req: Request, res: Response, next: NextFunction) {
  const authToken = req.cookies.token;
  // const token = req.get("token");

  if (!authToken) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const { token } = jwt.verify(
      authToken,
      process.env.JWT_SECRET as string
    ) as { token: string };

    if (!req.user) {
      const user = await prisma.user.findFirst({
        where: { token },
      });

      req.user = user!.email;
    }

    next();
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
}
