const express = require("express");
const router = express.Router();
const SurveyResponse = require("../models/SurveyResponse");

//POST /api/survey
router.post("/", async (req, res) => {
  try {
    const { sessionId, answers, status } = req.body;
    const newResponse = new SurveyResponse({ sessionId, answers, status });
    const saved = await newResponse.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
