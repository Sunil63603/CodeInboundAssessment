//1. load packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

//2. load env variables
dotenv.config();

//3. Create express app
const app = express();
const BACKEND_PORT = process.env.BACKEND_PORT || 5000;

//4.Middlewares
app.use(cors());
app.use(express.json());

//5.Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅MongoDB connected"))
  .catch((error) => console.error("❌MongoDB error:", error));

//6.Import routes
const surveyRoutes = require("./routes/surveyRoutes");

//7. Use routes
app.use("/api/survey", surveyRoutes);

//8. Start server
app.listen(BACKEND_PORT, () => {
  console.log(`🚀Server running on port ${BACKEND_PORT}`);
});
