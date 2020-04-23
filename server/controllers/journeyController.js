const Journey = require('../models/journeySchema');

// @desc      GET all journeys
// @route     GET /api/Journeys
// @access    Public
exports.getJourneys = async (req, res, next) => {
  try {
    const journeys = await Journey.find();
    return journeys;
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc      Add Journey
// @route     POST /api/Journeys
// @access    Public
exports.addJourney = async (req, res, next) => {
  try {
    const { method, origin, destination, time, timeValue, healthPoints, sustainabilityPoints } = req.body;

    const journey = await Journey.create(req.body);

    return res.status(201).json({
      success: true,
      data: journey
    });

  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
};

/**
// @desc      Delete transaction
// @route     DELETE /api/v1/transactions/:id
// @access    Public
exports.deleteJourney = async (req, res, next) => {
  try {
    const journey = await Journey.findById(req.params.id);

    if (!journey) {
      return res.status(404).json({
        success: false,
        error: 'No journey found'
      });
    }

    await journey.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

*/