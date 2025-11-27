const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const questionRoutes = require("./Routes/questionRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("YUGA AI MCQ Quiz Backend is running");
});

app.use("/api/questions", questionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
