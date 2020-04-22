const express = require('express');
const router = express.Router();
const cycling = require('../mock/cycling.json');
const walking = require('../mock/walking.json');
const driving = require('../mock/driving.json');


router.post('/', function(req, res, next) {
  // origin and destination come from request
  // if route alreaqdy exists in database, serve from database
  // if route doesn't yet exists hit API and store it in database
  // send back data as a JSON array with results for each travel option
  // (the front end will take care of sorting and presentation)
  const body = req.body;
  console.log(body);
  res.send(cycling);
});

module.exports = router;
