import mongoose from "mongoose";
import dotenv from 'dotenv';

// rest of your code

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;


