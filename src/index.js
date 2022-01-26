const express = require('express');
const app = express();
const todoRouter = require('./routes/todoRouter')
const userRouter = require('./routes/userRouter')
const cors = require('cors');

const whitelist = {
    origin: 'http://localhost:3000'
}

app.use(cors(whitelist));

app.use(express.json())

app.use('/users', userRouter)

app.use('/', todoRouter)

module.exports = app