const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  activityType: {
    type: String,
    required: true,
  },
  activityName: {
    type: String,
    required: true,
  },
  activityDescription: {
    type: String,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  date: {
    type: Date,
    // default: Date.now,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
