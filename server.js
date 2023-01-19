const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/userRouter')


app.use(cors());
app.use(express.json());



app.use("/api/user",userRouter);

module.exports = app;

