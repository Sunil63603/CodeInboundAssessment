import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); //5 seconds

    return () => clearTimeout(timer); //cleanup
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <Card className="max-w-md p-4">
        <CardContent className="text-center space-y-4">
          <Typography variant="h5" className="font-semibold">
            Thank You for your time!
          </Typography>
          <Typography>
            Your response has been recorded. You will be redirected shortly...
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage;
