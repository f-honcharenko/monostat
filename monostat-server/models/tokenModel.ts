import { Document, model, Schema } from "mongoose";
import { IUser } from "./userModel";

export interface IToken extends Document {
  token: string;
  userID?: IUser["_id"];
}

const tokenSchema = new Schema<IToken>(
  {
    token: { type: String, required: true },
    userID: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { collection: "users" }
);

export default model<IToken>("Token", tokenSchema);
