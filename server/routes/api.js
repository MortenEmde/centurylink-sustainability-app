const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/', async function(req, res, next) {
  // origin and destination come from request
  // if route alreaqdy exists in database, serve from database
  // if route doesn't yet exists hit API and store it in database
  // send back data as a JSON array with results for each travel option
  // (the front end will take care of sorting and presentation)
  
  const travelMethods = ['cycling', 'walking', 'driving']
  
  const fetchJourney = async (travelMethod) => {
    // const request = await fetch(`../mock/${travelMethod}.json`);
    // const data = await request.json();
    // return data;
    const request = require(`../mock/${travelMethod}.json`);
    return request;
  }

  const transportData = async (travelMethod) => {
    const result = await fetchJourney(travelMethod);
    const time = await result.rows[0].elements[0].duration.text;
    const timeValue = await result.rows[0].elements[0].duration.value;
    const healthPoints = Math.floor(Math.random() * 10) + 1;
    const sustainabilityPoints = Math.floor(Math.random() * 10) + 1;
    return {method: travelMethod, time, timeValue, healthPoints, sustainabilityPoints}
  }

  const endResult = async () => {
    return Promise.all(travelMethods.map(transportData))
  }
  
  res.send(await endResult());
});



module.exports = router;