import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: `${process.cwd()}/.env` });

const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
// This will connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
