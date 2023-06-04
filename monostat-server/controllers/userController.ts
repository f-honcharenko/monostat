import { Response } from "express";
import { IRequest } from "utils/types";

import TokenService from "@services/tokenService";
import { IToken } from "@models/tokenModel";
import axios from "axios";

export default class UserController {
  static async addToken(req: IRequest, res: Response) {
    try {
      await TokenService.create({
        value: req.body.token,
        userID: req.user._id,
      } as IToken);
      res.status(200).json("Succesfully saved");
    } catch (error: any) {
      console.error(error);
      res.status(error.statusError).json({ error: error.message });
    }
  }
  static async removeToken(req: IRequest, res: Response) {
    try {
      await TokenService.remove({
        value: req.body.token,
        userID: req.user._id,
      } as IToken);
      res.status(200).json("Succesfully removed");
    } catch (error: any) {
      console.error(error);
      res.status(error.statusError).json({ error: error.message });
    }
  }
  static async getTokens(req: IRequest, res: Response) {
    try {
      const { list } = await TokenService.list(req.user._id);
      res.status(200).json({ list });
    } catch (error: any) {
      console.error(error);
      res.status(error.statusError).json({ error: error.message });
    }
  }
  static async activateToken(req: IRequest, res: Response) {
    try {
      const { tokenId } = req.body;
      const tokenObj = await TokenService.get(tokenId as string);

      const wh = await axios.post(
        `https://api.monobank.ua/personal/webhook`,
        {
          webHookUrl: "http://176.130.237.9:3000/wh",
        },
        {
          headers: {
            "X-Token": tokenObj.value,
          },
        }
      );
      console.log(wh.data);
      res.status(200).json(wh.data);
    } catch (error: any) {
      console.error(error);
      res
        .status(error.statusError || error.status)
        .json({ error: error.message });
    }
  }
}
