const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_URI = process.env.MONGODB_URI;

// middleware
app.use(cors());
app.use(express.json());

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};
connectDB();

// application
const PORT = process.env.port || 8000;
app.listen(PORT, () => {
  console.log(`🚀 app is listening on port: ${PORT}`);
});
