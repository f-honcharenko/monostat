import { Request, Response } from "express";

export default class WHController {
  static async resend(_req: Request, res: Response) {
    console.log(`[WH] I get smth :)`);

    res.status(200);
  }
}
