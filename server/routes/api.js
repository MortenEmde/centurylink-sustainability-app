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
  
    // fetch for google maps distance matrix API
    const fetchJourney = async (travelMethod) => {
      // const request = await fetch(`INSERT URL HERE`);
      // const data = await request.json();
      // return data;
      const request = require(`../mock/${travelMethod}.json`);
      return request;
    }

    // fetch for point system API (to be build by Centurylink)
    const fetchPoints = async () => {
      // const request = await fetch(`INSERT URL HERE`);
      // const data = await request.json();
      // return data;
      const requestPoints = require(`../mock/points.json`);
      return requestPoints;
    }
  
    // structure the retrieved data to the schema we want in the database and frontend
    const journeyData = async (travelMethod) => {
      const journey = await fetchJourney(travelMethod);
      const points = await fetchPoints();
      const origin = await journey.origin_addresses[0];
      const destination = await journey.destination_addresses[0];
      const time = await journey.rows[0].elements[0].duration.text;
      const timeValue = await journey.rows[0].elements[0].duration.value;
      const healthPoints = await points[travelMethod].points.hearts;
      const sustainabilityPoints = await points[travelMethod].points.leaves;
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
