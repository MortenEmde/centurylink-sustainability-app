const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Journeys = require('../models/journeySchema');

router.post('/', async function(req, res, next) {
  // origin and destination come from request
  // if route alreaqdy exists in database, serve from database
  // if route doesn't yet exists hit API and store it in database
  // send back data as a JSON array with results for each travel option
  // (the front end will take care of sorting and presentation)
  const request_origin = req.body.origin;
  const request_destination = req.body.destination;
  const journeys = await Journeys.find()

  console.log(journeys);
  // if request_origin and request_destination exist in database ...

  const travelMethods = ['cycling', 'walking', 'driving']
  
  const fetchJourney = async (travelMethod) => {
    // const request = await fetch(`../mock/${travelMethod}.json`);
    // const data = await request.json();
    // return data;
    const request = require(`../mock/${travelMethod}.json`);
    return request;
  }



  const transportData = async (travelMethod) => {
    //add addresses here
    const result = await fetchJourney(travelMethod);
    const origin = await result.origin_addresses[0];
    const destination = await result.destination_addresses[0];
    const time = await result.rows[0].elements[0].duration.text;
    const timeValue = await result.rows[0].elements[0].duration.value;
    const healthPoints = Math.floor(Math.random() * 10) + 1;
    const sustainabilityPoints = Math.floor(Math.random() * 10) + 1;
    // store this in database, and add origin/dest adress. 
    return {method: travelMethod, origin, destination, time, timeValue, healthPoints, sustainabilityPoints}
  }

  const endResult = async () => {
    return Promise.all(travelMethods.map(transportData))
  }
  
  res.send(await endResult());
});



module.exports = router;
