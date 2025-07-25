import mongoose from "mongoose";

// Function to connect to the MongoDB database
export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {console.log("MongoDB connected")});
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    } catch (error) {
        console.log(error);
    }
}