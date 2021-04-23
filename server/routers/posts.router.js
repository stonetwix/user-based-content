const express = require('express');
const postsRouter = express.Router();
const PostModel = require('../models/posts.model');

const { body, validationResult } = require('express-validator');

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

postsRouter.post('/api/posts', 
    body('title').not().isEmpty(),
    body('author').not().isEmpty(),
    body('date').not().isEmpty(),
    body('text').not().isEmpty(),
    body('imageUrl').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }
        const newPost = await PostModel.create(req.body);
        res.status(201).json(newPost);
    }
);

postsRouter.put('/api/posts/:id', 
    body('title').not().isEmpty(),
    body('author').not().isEmpty(),
    body('date').not().isEmpty(),
    body('text').not().isEmpty(),
    body('imageUrl').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }
        try {
            const post = await PostModel.findById(req.params.id).updateOne(req.body);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({ error: 'Post not available' });
        }
    }
);

postsRouter.delete('/api/posts/:id', async (req, res) => {
    try {
        await PostModel.findById(req.params.id).deleteOne();
        res.status(204).json({});
        
    } catch (error) {
        res.status(404).json({ error: 'Post not available' });
    }
});

module.exports = postsRouter;