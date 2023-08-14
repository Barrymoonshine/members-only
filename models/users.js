import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define schema
const usersSchema = new Schema({
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
    type: Number,
    required: true,
  },
  isAdmin: {
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
const Users = mongoose.model('Users', usersSchema);

export default Users;
