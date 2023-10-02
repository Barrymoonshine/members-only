import { Schema, Types, model } from 'mongoose';

type MessageModel = {
  _id: Types.ObjectId;
  username: string;
  title: string;
  message: string;
};

const messageSchema = new Schema<MessageModel>(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = model<MessageModel>('Messages', messageSchema);

export default Message;
