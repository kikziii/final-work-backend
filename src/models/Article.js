import mongoose from 'mongoose';

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    mainPicUrl: {
        type: String,
        required: true,
    },
    picUrl: {
        type: Array,
        default: [],
    },
    updated: {
        type: Date,
        default: Date.now,
    }
});

const article = mongoose.model('Articles', ArticleSchema);

export default article;