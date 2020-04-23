const express = require('express');
const router = express.Router();
const { getJourneys, addJourney } = require('../controllers/journeyController');

router
  .route('/')
  .get(getJourneys)
  .post(addJourney);

// router
//   .route('/:id')
//   .delete(deleteTransaction);

module.exports = router;