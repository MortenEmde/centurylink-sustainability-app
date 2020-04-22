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

  const travelMethods = [cycling, walking, driving]
  
  const transportData = (travelMethod) => {
    const time = travelMethod.rows[0].elements[0].duration.text
    const timeValue = travelMethod.rows[0].elements[0].duration.value
    const healthPoints = Math.floor(Math.random() * 10) + 1
    const sustainabilityPoints = Math.floor(Math.random() * 10) + 1
    return {method: travelMethods[i], time, timeValue, healthPoints, sustainabilityPoints}
  }

  const endResult = travelMethods.map(transportData);
  res.send(endResult);
});



module.exports = router;
