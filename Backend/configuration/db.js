import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://sheetaljain3618:sheetal1029@cluster0.o8x9fal.mongodb.net/FOOD_ORDER').then(()=>console.log("DB CONNECTED"));
};