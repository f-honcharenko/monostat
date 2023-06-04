import TokenModel, { IToken } from "@models/tokenModel";
import { IError } from "@utils/types";

export default class TokenService {
  static create = async (token: IToken): Promise<Boolean> => {
    try {
      const _token = new TokenModel(token);
      await _token.save();
      return new Promise((res) => res(true));
    } catch (error: any) {
      console.error(error);
      throw new IError(500, "Error saving Token");
    }
  };
  static remove = async (token: IToken): Promise<Boolean> => {
    try {
      //TODO: Check if an user have permission to delete this token(FUTUTRE)
      const { value } = token;
      await TokenModel.deleteOne({ value });

      return new Promise((res) => res(true));
    } catch (error: any) {
      console.error(error);
      throw new IError(500, "Error removing Token");
    }
  };
  static list = async (userID: string): Promise<{ list: Array<IToken> }> => {
    try {
      const result: Array<IToken> = await TokenModel.find({ userID }).select({
        value: 1,
      });
      return new Promise((res) => {
        res({ list: result });
      });
    } catch (error: any) {
      console.error(error);
      throw new IError(500, "Error removing Token");
    }
  };
  static get = async (tokenID: string): Promise<IToken> => {
    try {
      return new Promise(async (res, rej) => {
        console.log(tokenID);
        //TODO: Check if an user have permission to get this token(FUTUTRE)
        const tokenObj = await TokenModel.findOne({ _id: tokenID });
        if (!tokenObj) {
          return rej("Not Found");
        }
        return res(tokenObj);
      });
    } catch (error: any) {
      console.error(error);
      throw new IError(500, "Error removing Token");
    }
  };
}
