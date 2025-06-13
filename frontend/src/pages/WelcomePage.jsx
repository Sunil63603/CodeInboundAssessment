import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/survey");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <Card className="w-full max-w-md p-4">
        <CardContent className="space-y-6 text-center">
          <Typography variant="h5" className="font-bold">
            Welcome to the Customer Survey
          </Typography>
          <Typography>
            Please take a minute to answer a few short question.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleStart}>
            Start
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePage;
