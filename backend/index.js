import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDatabase } from "./config/dbConnection.js";
import { PORT } from "./config/env.js";

const app = express();

// Server middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());


// Server start
app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Server started on port ${PORT}`);
});
