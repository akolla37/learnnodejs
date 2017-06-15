var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Vehicle = require('./app/models/vehicle');

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

//MIDDLEWARE
//This is where all the pre and post logic, validations
// and logging happens.
//We can stop the request from continuing if not valid or safe

router.use(function(req, res, next){
  console.log("Inside the MIDDLEWARE");
  next();
});

// Test Routes

router.get('/', function(req, res){
  res.json({
    message: "Welcome to my First API!!"
  });
});

router.route('/vehicles')
  .post(function(req, res){
    var vehicle = new Vehicle(); //new instance
    vehicle.make = req.body.make;
    vehicle.model = req.body.model;
    vehicle.color = req.body.color;

    vehicle.save(function(err){
      if(err){
        console.log("Error happened : " + err);
        res.send(err);
      }

      res.json({
        message: "Vehicle is successfully added"
      });
    });
  })
    .get(function(req, res){
      Vehicle.find(function(err, vehicles){
        if(err){
          console.log("Error happened : " + err);
          res.send(err);
        }

        res.json(vehicles);
      });
  });

  router.route('/vehicle/:vehicle_id')
    .get(function(req, res){
      Vehicle.findById(req.params.vehicle_id, function(err, vehicle){
        if(err){
          res.send(err);
        }
        res.json(vehicle);
      });
    });

    router.route('/vehicle/make/:make')
      .get(function(req, res){
        Vehicle.find({make:req.params.make}, function(err, vehicles){
          if(err){
            res.send(err);
          }
          res.json(vehicles);
        });
      });

      router.route('/vehicle/color/:color')
        .get(function(req, res){
          Vehicle.find({color:req.params.color}, function(err, vehicles){
            if(err){
              res.send(err);
            }
            res.json(vehicles);
          });
        });


// Fire up our server
app.listen(port);

console.log("FIRST API Server started on " + port);
