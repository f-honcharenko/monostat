import { Document, model, Schema } from "mongoose";

export enum notificationStatus {
  NOT_READED = 0,
  READED = 1,
}

export interface INotification extends Document {
  message: string;
  status: notificationStatus;
}

const notificationScheme = new Schema<INotification>(
  {
    message: { type: String, required: true },
    status: {
      type: Number,
      enum: Object.values(notificationStatus),
      required: true,
    },
  },
  { collection: "notifications" }
);

export default model<INotification>("Notification", notificationScheme);
