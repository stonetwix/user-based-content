const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/users.model');
const { body, validationResult } = require('express-validator');

//Endpoints
userRouter.get('/api/users', async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
});

userRouter.get('/api/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);      
    } catch (error) {
        res.status(404).json({ error: 'User not available' });
    }
});

userRouter.post('/api/users', 
    body('userName').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }
        const user = req.body;
        user.role = 'publisher';
        user.password = user.password; // Add Bcrypt
        const newUser = await UserModel.create(user);
        res.status(201).json(newUser);
    }
);

userRouter.put('/api/users/:id', 
    body('userName').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('role').not().isEmpty(),
    body('password').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()});
        }
        try {
            const user = await UserModel.findById(req.params.id).updateOne(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ error: 'User not available' });
        }
    }
);

userRouter.delete('/api/users/:id', async (req, res) => {
    try {
        await UserModel.findById(req.params.id).deleteOne();
        res.status(204).json({});
    } catch (error) {
        res.status(404).json({ error: 'User not available' });
    }
});

module.exports = userRouter;