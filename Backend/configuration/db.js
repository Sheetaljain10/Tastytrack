import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB CONNECTED");
  } catch (error) {
    console.error("DB CONNECTION FAILED:", error.message);
    process.exit(1); // Stop server if DB fails
  }
};
