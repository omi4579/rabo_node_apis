import { Request, Response, NextFunction } from "express";

export const deletemiddleware = (req: Request, res: Response, next: NextFunction) => {
  const adminKey = req.header("x-admin-key");

  if (!adminKey || adminKey !== "secret123") {
    return res.status(403).json({ message: "Forbidden: Invalid or missing header" });
  }

  next();
};
