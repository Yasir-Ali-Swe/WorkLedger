import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDatabase } from "./config/dbConnection.js";
import { PORT } from "./config/env.js";

const server = express();

// Server middlewares
server.use(express.json());
server.use(cookieParser());
server.use(cors());


// Server start
server.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Server started on port ${PORT}`);
});
