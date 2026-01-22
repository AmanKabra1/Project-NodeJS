//core modules
const path = require('path');

//External modules
const express = require('express');
const userRouter = express.Router();

//local modules
const rootDir = require('../utils/pathUtils');

userRouter.get("/", (req, res, next) =>{
    console.log(req.url, req.method);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;