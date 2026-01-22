//core modules
const path = require('path');

//External modules
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

const DB_PATH = "mongodb+srv://AmanK:aman1@cluster0.kf1zbpt.mongodb.net/todo?appName=Cluster0" 

//local modules
const errorsController = require('./controllers/error');
const todoItemRouter = require('./routes/todoItemsRouter');

const app = express(); 


app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemRouter);

app.use(errorsController.pageNotFound);

const PORT = 3001;

mongoose.connect(DB_PATH).then(() => {
    app.listen(PORT, () =>{
        console.log(`Server is running on address http://localhost:${PORT}`);
    });
}).catch(err =>{
    console.log('Error while connecting to Mongo: ', err);
})