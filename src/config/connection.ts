import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI as string;

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "connectify-apis",
    });
    console.log("Database connected successfuly");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};
