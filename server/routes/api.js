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

  const cyclingDurationText = cycling.rows[0].elements[0].duration.text
  const cyclingDistanceValue = cycling.rows[0].elements[0].distance.value
  const cyclingDurationValue = cycling.rows[0].elements[0].duration.value

  const cyclingObject = { cyclingDurationText, cyclingDistanceValue, cyclingDurationValue };

  const walkingDurationText = walking.rows[0].elements[0].duration.text
  const walkingDistanceValue = walking.rows[0].elements[0].distance.value
  const walkingDurationValue = walking.rows[0].elements[0].duration.value

  const walkingObject = { walkingDurationText, walkingDistanceValue, walkingDurationValue };

  const drivingDurationText = driving.rows[0].elements[0].duration.text
  const drivingDistanceValue = driving.rows[0].elements[0].distance.value
  const drivingDurationValue = driving.rows[0].elements[0].duration.value

  const drivingObject = { drivingDurationText, drivingDistanceValue, drivingDurationValue };

  const allTravelResults = {cyclingObject, walkingObject, drivingObject};
  const body = req.body;
  console.log(body);
  res.send(allTravelResults);
});

module.exports = router;
