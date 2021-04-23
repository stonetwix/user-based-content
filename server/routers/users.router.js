const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/users.model');

//Endpoints
userRouter.get('/api/users', async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
    //res.status(200).json(readUsers());
});

userRouter.get('/api/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);      
    } catch (error) {
        res.status(404).json({ error: 'User not available' });
    }
    
    // const users = readUsers();
    // const user = users.find(u => u.id === Number(req.params.id));
    // if (!user) {
    //     res.status(404).json({ error: 'User not available' });
    // }
    // res.status(200).json(user);
});

userRouter.post('/api/users', async (req, res) => {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
    
    // const users = readUsers();
    // const newUser = req.body;
    // newUser.id = Math.max(...users.map((item) => item.id)) + 1;
    // users.push(newUser);
    // writeUsers(users);
    // res.status(201).json(newUser);
});

userRouter.put('/api/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id).updateOne(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: 'User not available' });
    }
    // let users = readUsers();
    // const user = req.body;
    // const id = Number(req.params.id);
    // user.id = id;
    // users = users.map((item) => item.id === id ? user : item);
    // writeUsers(users);
    // res.status(200).json(req.body);
});

userRouter.delete('/api/users/:id', async (req, res) => {
    try {
        await UserModel.findById(req.params.id).deleteOne();
        res.status(204).json({});
    } catch (error) {
        res.status(404).json({ error: 'User not available' });
    }
    
    // let users = readUsers();
    // users = users.filter((item) => item.id !== Number(req.params.id));
    // writeUsers(users);
    // res.status(204).json({});
});

module.exports = userRouter;