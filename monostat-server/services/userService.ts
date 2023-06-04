import { ProjectionType, Types } from "mongoose";

import UserModel, { IUser } from "models/userModel";
import AuthService from "services/authService";
import { IError } from "utils/types";

export default class UserService {
  static createUser = async (user: IUser): Promise<IUser> => {
    user.password = await AuthService.hashPassword(user.password);
    user = new UserModel(user);

    return (await user.save()).toObject();
  };
  static getUserById = async (
    userId: string,
    projection?: ProjectionType<IUser>
  ): Promise<IUser> => {
    const user = await UserModel.findById(userId, projection);
    if (!user) {
      throw new IError(404, "User does not exist");
    }
    return user.toObject();
  };
  static getUserByEmail = async (
    email: string,
    projection?: ProjectionType<IUser>
  ): Promise<IUser | null> => {
    const user = await UserModel.findOne({ email }, projection);
    if (!user) {
      return null;
    }
    return user.toObject();
  };
  static updateBoss = async (
    userId: string,
    newBossId: string
  ): Promise<IUser | null> => {
    return UserModel.findByIdAndUpdate(
      userId,
      { boss: new Types.ObjectId(newBossId) },
      {
        new: true,
        select: {
          _id: true,
          email: true,
          role: true,
          boss: true,
        },
      }
    );
  };
}
