import mongoose from 'mongoose';
import moment from 'moment';

const ChatSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const chat = mongoose.model('Chat', ChatSchema);

export default chat;