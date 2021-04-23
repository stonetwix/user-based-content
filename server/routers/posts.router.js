const express = require('express');
const postsRouter = express.Router();
const PostModel = require('../models/posts.model');

//Endpoints
postsRouter.get('/api/posts', async (req, res) => {
    const posts = await PostModel.find({});
    res.status(200).json(posts);
});

postsRouter.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);    
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not available' });
    }
});

postsRouter.post('/api/posts', async (req, res) => {
    const newPost = await PostModel.create(req.body);
    res.status(201).json(newPost);
});

postsRouter.put('/api/posts/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id).updateOne(req.body);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ error: 'Post not available' });
    }
});

postsRouter.delete('/api/posts/:id', async (req, res) => {
    try {
        await PostModel.findById(req.params.id).deleteOne();
        res.status(204).json({});
        
    } catch (error) {
        res.status(404).json({ error: 'Post not available' });
    }
});

module.exports = postsRouter;