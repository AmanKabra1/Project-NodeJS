//core modules
const path = require('path');

//External modules
const express = require('express');
const hostRouter = express.Router();

//local modules
const rootDir = require('../utils/pathUtils');

hostRouter.get("/add-home", (req, res, next) =>{
        res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home",(req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;
