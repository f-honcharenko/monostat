import { Router } from "express";
import WHController from "@controllers/WHController";
import { authMiddleware } from "@middlewares/authMiddleware";

const userRouter = Router();

userRouter.get("/", authMiddleware, WHController.resend);

export default userRouter;
