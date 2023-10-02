import { Schema, model } from 'mongoose';
const messageSchema = new Schema({
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
}, { timestamps: true });
const Message = model('Messages', messageSchema);
export default Message;
