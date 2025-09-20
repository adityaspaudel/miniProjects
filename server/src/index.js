const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/db.js");
const dotenv = require("dotenv");
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

connectDB();

// application
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 app is listening on port: ${PORT}`);
});
