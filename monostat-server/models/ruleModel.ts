import { Document, model, Schema } from "mongoose";

export enum tokenStatus {
  DECLINED = 0,
  OK = 1,
  PENDING = 3,
}

export interface IRule extends Document {
  token: string;
  status: tokenStatus;
}

const ruleScheme = new Schema<IRule>(
  {
    token: { type: String, required: true },
    status: {
      type: Number,
      enum: Object.values(tokenStatus),
      required: true,
    },
  },
  { collection: "rules" }
);

export default model<IRule>("Rule", ruleScheme);
