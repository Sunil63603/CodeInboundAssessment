const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  answers: {
    type: Map,
    of: mongoose.Schema.Types.Mixed, // Accepts number or text
    default: {},
  },
  status: {
    type: String,
    enum: ["IN_PROGRESS", "COMPLETED"],
    default: "IN_PROGRESS",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SurveyResponse", surveySchema);
