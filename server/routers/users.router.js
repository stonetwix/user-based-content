const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/users.model');
const bcrypt = require('bcrypt');

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
    body('username').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = req.body;

        const userExists = await UserModel.exists({ 'username': user.username });
         if (userExists) {
            return res.status(400).json('User name already exists');
        }
        user.role = 'publisher';
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const newUser = await UserModel.create(user);
        res.status(201).json(newUser);
    }
);

userRouter.post('/api/login',
    body('email').isEmail().normalizeEmail(),
    body('password').not().isEmpty(),
    async (req, res) => {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ 'email': email });
        console.log(user);
        if (!user || !await bcrypt.compare(password, user.password)) {
            res.status(401).json('Incorrect e-mail or password');
            return;
        }
        req.session.username = user.username;
        req.session.email = email;
        req.session.role = user.role;
        res.status(200).json(user);
    }
);

userRouter.put('/api/users/:id', 
    body('username').not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('role').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
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

userRouter.delete('/api/logout', (req, res) => {
    if (!req.session.email) {
        return res.status(400).json('You are already logged out');
    }
    req.session = null;
    res.status(200).json('Logged out')
});

module.exports = userRouter;