const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_URI = process.env.MONGODB_URI;

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    // process.exit(1);
  }
};

module.exports = connectDB;
