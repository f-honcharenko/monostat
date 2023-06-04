import { Document, model, Schema } from "mongoose";

export enum UserRole {
  ADMIN = "admin",
  BOSS = "boss",
  REGULAR = "regular",
}

export interface IUser extends Document {
  email: string;
  password: string;
  boss?: IUser["_id"];
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  boss: { type: Schema.Types.ObjectId, ref: "User" },
});

export default model<IUser>("User", userSchema);
