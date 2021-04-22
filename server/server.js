const express = require('express');
const cors = require('cors');
const postRouter = require('./routers/posts.router');
const userRouter = require('./routers/users.router')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(postRouter);
app.use(userRouter);




//Start server
app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));