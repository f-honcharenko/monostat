import { Response, NextFunction } from "express";

import AuthService from "@services/authService";
import { IRequest } from "@utils/types";

export const authMiddleware = (
  req: IRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = String(req.header("Authorization")?.replace("Bearer ", ""));
  if (!token) {
    res.status(401).json({ message: "Authentication required" });
  }
  req.user = AuthService.decodeToken(token);
  next();
};
