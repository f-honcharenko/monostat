import { Response } from "express";
import { IRequest } from "utils/types";

// import UserService from "services/user.service";

export default class UserController {
  static async getUsers(req: IRequest, res: Response) {
    const { _id } = req.user;
    try {
      //   const list = await UserService.getUsers(_id, {
      //     _id: 1,
      //     login: 1,
      //     boss: 1,
      //     role: 1,
      //   });
      res.status(200).json({ _id });
    } catch (error: any) {
      res.status(error.status).json({ error: error.message });
    }
  }
}
