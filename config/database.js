const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(MONGO_URI, {
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: false,
});

const db = mongoose.connection;

// Event listeners for successful connection and error
db.on("connected", () => {
    console.log("Connected to MongoDB");
});

db.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

// Close the Mongoose connection on application termination
process.on("SIGINT", () => {
    db.close(() => {
        console.log("MongoDB connection closed through app termination");
        process.exit(0);
    });
});

module.exports = db;
