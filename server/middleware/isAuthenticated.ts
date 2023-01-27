import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default function (req: Request, res: Response, next: NextFunction) {
  const token = req.get("token");
  
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
}
