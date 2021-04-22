const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    text: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const PostModel = mongoose.model('traveler', postSchema);

module.exports = PostModel;