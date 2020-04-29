const express = require('express');
const router = express.Router();
// const fetch = require('node-fetch');
const { getJourneys, addJourney } = require('../controllers/journeyController');

router.post('/', async function(req, res, next) {
  const requestOrigin = req.body.origin;
  const requestDestination = req.body.destination;
  
  console.log(req.body);
  console.log(requestOrigin, requestDestination);

  const journeys = await getJourneys(req, res, next);
  
  // if route alreaqdy exists in database, serve from database
  const databaseHits = await journeys.filter(journey => 
    journey.origin === requestOrigin && journey.destination === requestDestination);
    if (databaseHits.length > 0) {
      // send from mongoDB
      res.send(databaseHits);
      
    } else { // route doesn't yet exists in database, hit API and store it in database
    const travelMethods = ['cycling', 'walking', 'driving', 'transit']
  
    const fetchJourney = async (travelMethod) => {
      // const request = await fetch(`INSERT URL HERE`);
      // const data = await request.json();
      // return data;
      const request = require(`../mock/${travelMethod}.json`);
      return request;
    }
  
    // structure the retrieved data to the schema we want in the database and frontend
    const journeyData = async (travelMethod) => {
      const result = await fetchJourney(travelMethod);
      const origin = await result.origin_addresses[0];
      const destination = await result.destination_addresses[0];
      const time = await result.rows[0].elements[0].duration.text;
      const timeValue = await result.rows[0].elements[0].duration.value;
      const healthPoints = Math.floor(Math.random() * 10) + 1;
      const sustainabilityPoints = Math.floor(Math.random() * 10) + 1;
      return {method: travelMethod, origin, destination, time, timeValue, healthPoints, sustainabilityPoints}
    }
  
    const formattedJourneyData = async () => {
      return Promise.all(travelMethods.map(journeyData))
    }

    // add to database
    addJourney(await formattedJourneyData());
    // send back result
    res.send(await formattedJourneyData());
  }
});

module.exports = router;
