import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB подключен");
    } catch (err) {
        console.error("❌ Ошибка подключения к MongoDB:", err.message);
        process.exit(1);
    }
};

export default connectDB;