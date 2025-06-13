import React from "react";
import { useState } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { ToggleButton, ToggleButtonGroup, TextField } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { questions } from "../services/questionService";
import { submitSurvey } from "../services/surveyService";
import { useNavigate } from "react-router-dom";

const SurveyPage = () => {
  //sample question tracker values(we'll make dyynamic later)
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  const [answers, setAnswers] = useState({});

  const [showConfirm, setShowConfirm] = useState(false);

  const [sessionId] = useState(() => Date.now().toString());
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-2xl p-4">
        <CardContent>
          {/* Progress */}
          <Typography variant="subtitle2" color="textSecondary">
            Question {currentIndex + 1}/{questions.length}
          </Typography>

          {/* Question text */}
          <Typography variant="h6" className="mt-4 mb-6">
            {currentQuestion.text}
          </Typography>

          {currentQuestion.type === "rating" && (
            <div className="mb-6">
              <Typography gutterBottom>
                Rate (1 to {currentQuestion.scale})
              </Typography>
              <ToggleButtonGroup
                exclusive
                value={answers[currentQuestion.id] || null}
                onChange={(e, newValue) => {
                  if (newValue !== null) {
                    setAnswers({ ...answers, [currentQuestion.id]: newValue });
                  }
                }}
              >
                {Array.from(
                  { length: currentQuestion.scale },
                  (_, i) => i + 1
                ).map((num) => (
                  <ToggleButton key={num} value={num}>
                    {num}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
          )}

          {currentQuestion.type === "text" && (
            <div className="mb-6">
              <TextField
                label="Your Feedback"
                fullWidth
                multiline
                minRows={4}
                variant="outlined"
                className="mb-6"
                value={answers[currentQuestion.id] || ""}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [currentQuestion.id]: e.target.value,
                  })
                }
              ></TextField>
            </div>
          )}

          {/* Navigation buttons */}
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              variant="outlined"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((i) => i - 1)}
            >
              Previous
            </Button>
            <Button
              variant="text"
              onClick={() => {
                if (currentIndex === questions.length - 1) {
                  setShowConfirm(true); //✅show dialog
                } else {
                  setCurrentIndex((i) => i + 1);
                }
              }}
            >
              Skip
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                if (currentIndex === questions.length - 1) {
                  setShowConfirm(true); //show dialog
                } else {
                  setCurrentIndex((i) => i + 1);
                }
              }}
              disabled={currentIndex === questions.length - 1}
            >
              Next
            </Button>
          </Stack>
          <Dialog open={showConfirm} onClose={() => setShowConfirm(false)}>
            <DialogTitle>Submit Survey</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure your want to submit the survey?
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowConfirm(false)}>Cancel</Button>
              <Button
                variant="contained"
                onClick={async () => {
                  await submitSurvey(sessionId, answers);
                  //save data and navigate to Thank You screen
                  console.log("Answers:", answers); //Replace with API later
                  setShowConfirm(false);
                  //set "COMPLETED" flag here later
                  navigate("/thank-you");
                }}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default SurveyPage;
