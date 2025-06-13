import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SurveyPage from "./pages/SurveyPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="/survey" element={<SurveyPage></SurveyPage>}></Route>
        <Route
          path="/thank-you"
          element={<ThankYouPage></ThankYouPage>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
