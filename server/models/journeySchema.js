const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  destination_addresses: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  origin_addresses: {
    type: String,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Journey', journeySchema);

travelMethod, time, timeValue, healthPoints, sustainabilityPoints