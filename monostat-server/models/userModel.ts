import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  login: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model<IUser>("User", userSchema);
