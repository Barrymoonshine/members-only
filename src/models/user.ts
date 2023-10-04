import { Schema, Types, model } from 'mongoose';

type UserModel = {
  _id: Types.ObjectId;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  isMember: boolean;
  isAdmin: boolean;
};

const userSchema = new Schema<UserModel>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  isMember: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const User = model<UserModel>('Users', userSchema);

export default User;
