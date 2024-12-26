import mongoose from "mongoose";

export const conectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/backproject");
    console.log("DB connected");
  } catch (error) {
    console.log("Error: ", error);
  }
};
