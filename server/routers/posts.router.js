const express = require('express');
const router = express.Router();
const fs = require('fs');

//Endpoints
router.get('/api/posts', (req, res) => {
    res.status(200).json(readPosts());
});

router.get('/api/posts/:id', (req, res) => {
    const posts = readPosts();
    const post = posts.find(p => p.id === Number(req.params.id));
    if (!post) {
        res.status(404).json({ error: 'Post not available' });
    }
    res.status(200).json(post);
});

router.post('/api/posts', (req, res) => {
    const posts = readPosts();
    const newPost = req.body;
    newPost.id = Math.max(...posts.map((item) => item.id)) + 1;
    posts.push(newPost);
    writePosts(posts);
    res.status(201).json(newPost);
});

router.put('/api/posts/:id', (req, res) => {
    let posts = readPosts();
    const post = req.body;
    const id = Number(req.params.id);
    post.id = id;
    posts = posts.map((item) => item.id === id ? post : item);
    writePosts(posts);
    res.status(200).json(req.body);
});

router.delete('/api/posts/:id', (req, res) => {
    let posts = readPosts();
    posts = posts.filter((item) => item.id !== Number(req.params.id));
    writePosts(posts);
    res.status(204).json({});
})

module.exports = router;

//Helper functions to read/write posts from/to JSON
function readPosts() {
    let rawdata = fs.readFileSync('posts.json');
    return JSON.parse(rawdata);
}

function writePosts(posts) {
    let data = JSON.stringify(posts);
    fs.writeFileSync('posts.json', data);
}