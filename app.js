const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts.routes');
const categoriesRoutes = require('./routes/categories.routes');
const userRoutes = require('./routes/user.routes');
const cors = require("cors");
const app = express();

mongoose.connect("mongodb+srv://nadar123:nadar123@cluster0.crmea.mongodb.net/node-movies?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to data');
  })
  .catch(() => {
    console.log('connection falied');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());


app.use('/api/movies', postRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/user', userRoutes);




module.exports = app;

// WEZMSTPT
// c137b575-a6cd-4626-aa9f-40da11eb13fc
// mongodb+srv://<username>:<password>@cluster0.crmea.mongodb.net/<dbname>?retryWrites=true&w=majority

// mongo "mongodb+srv://cluster0.crmea.mongodb.net/node-movies" --username nadar123

// 5f2871f5f262195bdfc435cb
