const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: new Date().toISOString().slice(0, 10), required: true },
    text: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;