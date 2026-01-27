const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_URI =
	process.env.MONGODB_URI ||
	"mongodb+srv://miniprojects:1QSf2itl509LvAso@cluster0.snwneml.mongodb.net/?appName=Cluster0";

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
