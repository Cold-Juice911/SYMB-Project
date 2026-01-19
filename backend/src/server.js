import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = 3000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
