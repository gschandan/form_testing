const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const mongodb = 'mongodb+srv://soc-bootcamper:bootcamp@cluster0.cws7p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongodb, {useNewUrlParser:true, useUnifiedTopology:true});
const db=mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);