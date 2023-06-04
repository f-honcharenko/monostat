import { Router } from "express";
import UserController from "@controllers/userController";
import { authMiddleware } from "@middlewares/authMiddleware";

const userRouter = Router();

userRouter.get("/tokens", authMiddleware, UserController.getTokens);
userRouter.post("/token", authMiddleware, UserController.addToken);
userRouter.delete("/token", authMiddleware, UserController.removeToken);
userRouter.patch(
  "/token/activate",
  authMiddleware,
  UserController.activateToken
);

export default userRouter;
