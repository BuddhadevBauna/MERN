import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;
let isDBConnected = false;
const connectDB = async() => {
    try {
        await mongoose.connect(URI);
        isDBConnected = true;
        console.log("Connection successful to db");
    } catch (error) {
        console.error("Databse connection fail", error);
        isDBConnected = false;
        // process.exit(0);
    }
}

export { connectDB, isDBConnected };