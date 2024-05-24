import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to db");
    } catch (error) {
        console.error("Databse connection fail");
        process.exit(0);
    }
}

export default connectDB;