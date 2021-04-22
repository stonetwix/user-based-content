const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRouter = require('./routers/posts.router');
const userRouter = require('./routers/users.router')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
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