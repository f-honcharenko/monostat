import { Request, Response } from "express";

import UserService from "services/userService";
import AuthService from "services/authService";
import { IUser } from "models/userModel";
import { IError } from "utils/types";

export default class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { login, password } = req.body;
      if (!login || !password) {
        throw new IError(401, "Not enought credentials");
      }
      const isLoginUsed = await UserService.getUserByLogin(login);
      if (isLoginUsed) {
        throw new IError(401, "This Login already in use");
      }
      const user = await UserService.createUser({
        login,
        password,
      } as IUser);
      const token = AuthService.generateToken(user);
      res.status(201).json({ token, user });
    } catch (error: any) {
      res.status(error.statusError).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    const { login, password } = req.body;
    try {
      const user = await UserService.getUserByLogin(login);
      if (!user) {
        throw new IError(404, "User does not exits");
      }

      const isAuth = await AuthService.comparePasswords(
        password,
        user?.password
      );
      if (!isAuth) {
        throw new IError(401, "Login or Password wrong");
      }

      const token = AuthService.generateToken(user);
      res.status(200).json({ token, user });
    } catch (error: any) {
      res.status(error.statusError).json({ error: error.message });
    }
  }
}
