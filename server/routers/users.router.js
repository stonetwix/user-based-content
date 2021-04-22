const express = require('express');
const router = express.Router();
const fs = require('fs');

//Endpoints
router.get('/api/users', (req, res) => {
    res.status(200).json(readUsers());
});

router.get('/api/users/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        res.status(404).json({ error: 'User not available' });
    }
    res.status(200).json(user);
});

router.post('/api/users', (req, res) => {
    const users = readUsers();
    const newUser = req.body;
    newUser.id = Math.max(...users.map((item) => item.id)) + 1;
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
});

router.put('/api/users/:id', (req, res) => {
    let users = readUsers();
    const user = req.body;
    const id = Number(req.params.id);
    user.id = id;
    users = users.map((item) => item.id === id ? user : item);
    writeUsers(users);
    res.status(200).json(req.body);
});

router.delete('/api/users/:id', (req, res) => {
    let users = readUsers();
    users = users.filter((item) => item.id !== Number(req.params.id));
    writeUsers(users);
    res.status(204).json({});
});


module.exports = router;

//Helper functions to read/write users from/to JSON
function readUsers() {
    let rawdata = fs.readFileSync('users.json');
    return JSON.parse(rawdata);
}

function writeUsers(users) {
    let data = JSON.stringify(users);
    fs.writeFileSync('users.json', data);
}