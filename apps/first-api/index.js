var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Configure app for bodyParser()
// lets us grab data from body of the POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Setup port for the server to listen on
var port = process.env.PORT || 3000;

// Connect to DB
mongoose.connect('mongodb://localhost:27017/firstapi');

// API Routers
var router = express.Router();

//Routes will all be prefixed with /api

app.use('/api', router);

// Test Routes

router.get('/', function(req, res){
  res.json({
    message: "Welcome to my First API!!"
  });
});

// Fire up our server
app.listen(port);

console.log("FIRST API Server started on " + port);
