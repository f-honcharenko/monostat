import { Document, model, Schema } from "mongoose";

export interface IToken extends Document {
  token: string;
}

const tokenSchema = new Schema<IToken>({
  token: { type: String, required: true },
});

export default model<IToken>("Token", tokenSchema);
