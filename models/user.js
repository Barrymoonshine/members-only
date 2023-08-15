import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define schema
const userSchema = new Schema({
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
    required: true,
  },
  posts: {
    type: Array,
    default: [],
    timestamps: true,
  },
});

// Model
const User = mongoose.model('Users', userSchema);

export default User;
