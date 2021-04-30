const express = require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const cookieSession = require('cookie-session');
const postRouter = require('./routers/posts.router');
const userRouter = require('./routers/users.router');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieSession({
    name: 'session',
    secret: 'aVeryS3cr3tK3y',
    secure: false,
    maxAge: 1000 * 3600 * 24,
    httpOnly: true
}));
app.use(postRouter);
app.use(userRouter);

async function run() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/traveler', 
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log('Database is connected');
    } catch (error) {
        console.error(error)
    }
    app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
}
run();