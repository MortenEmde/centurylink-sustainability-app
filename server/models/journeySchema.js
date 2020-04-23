const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  destination: {
    type: String,
    trim: true,
    required: [true, 'Please provide destination']
  },
  origin: {
    type: String,
    required: [true, 'Please provide origin']
  },
  method: {
    type: String,
    required: [true, 'Please provide method']
  },
  time: {
    type: String,
    required: [true, 'Please provide time']
  },
  timeValue: {
    type: Number,
    required: [true, 'Please provide timevalue']
  },
  healthPoints: {
    type: Number,
    required: [true, 'Please provide healthpoints']
  },
  sustainabilityPoints: {
    type: Number,
    required: [true, 'Please provide sustainabilitypoints']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // updatedAt
});

module.exports = mongoose.model('Journey', journeySchema);
