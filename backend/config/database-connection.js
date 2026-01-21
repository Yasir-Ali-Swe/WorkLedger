import mongoose from "mongoose";
import { DATABASE_STRING  } from "./env.js";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_STRING );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
