const express = require('express');
const postsRouter = express.Router();
const PostModel = require('../models/posts.model');
const { body, validationResult } = require('express-validator');
const auth = require('../auth');

//Endpoints
postsRouter.get('/api/allposts', async (req, res) => {
    const posts = await PostModel.find({}).sort({'date': 'desc'});
    res.status(200).json(posts);
});

postsRouter.get('/api/posts', 
    auth.secure,
    async (req, res) => {
    if (req.session.role === 'admin') {
        const posts = await PostModel.find({}).sort({'date': 'desc'});
        res.status(200).json(posts);
    } else if (req.session.role === 'publisher') {
        const userPosts = await PostModel.find({author: req.session.username}).sort({'date': 'desc'});
        res.status(200).json(userPosts);
    }
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
    auth.secure,
    body('title').not().isEmpty(),
    body('text').not().isEmpty(),
    body('imageUrl').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const post = req.body;
        post.author = req.session.username;
        const newPost = await PostModel.create(req.body);
        res.status(201).json(newPost);
    }
);

postsRouter.put('/api/posts/:id',
    auth.secure,
    body('title').not().isEmpty(),
    body('text').not().isEmpty(),
    body('imageUrl').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }
        let queryRes;
        const post = req.body;
        post.author = req.session.username;
        try {
            if (req.session.role === 'admin') {
                queryRes = await PostModel.findById(req.params.id).updateOne(post);
            } else {
                queryRes = await PostModel.find({_id: req.params.id, author: req.session.username}).updateOne(post);
            }    
        } catch (error) {
            res.status(404).json({ error: 'Post not available' });
        }
        if (!queryRes.nModified) {
            res.status(404).json({ error: 'Post not available' });
        } else {
            res.status(200).json(await PostModel.findById(req.params.id));
        }
    }
);

postsRouter.delete('/api/posts/:id', 
    auth.secure,
    async (req, res) => {
        let queryRes;
        try {
            if (req.session.role === 'admin') {
                queryRes = await PostModel.findById(req.params.id).deleteOne();
            } else {
                queryRes = await PostModel.find({_id: req.params.id, author: req.session.username}).deleteOne();
            }    
        } catch (error) {
            res.status(404).json({ error: 'Post not available' });
        }

        if (!queryRes.deletedCount) {
            res.status(404).json({ error: 'Post not available' });
        } else {
            res.status(204).json({});
        }
    }
);

module.exports = postsRouter;