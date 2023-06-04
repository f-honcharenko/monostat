import { Document, model, Schema } from "mongoose";
import { IUser } from "./userModel";

export interface IToken extends Document {
  value: string;
  userID?: IUser["_id"];
}

const tokenSchema = new Schema<IToken>(
  {
    value: { type: String, required: true, unique: true },
    userID: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { collection: "tokens" }
);

export default model<IToken>("Token", tokenSchema);
