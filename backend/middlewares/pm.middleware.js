import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const pmMiddleware = async (req, res, next) => {
  try {
    const headers = req.headers.authorization;

    if (!headers || !headers.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = headers.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded?.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userExists = await userModel.findById(decoded.userId);

    if (!userExists || userExists.role !== "PROJECT_MANAGER") {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.userId = userExists._id;
    req.companyId = userExists.companyId;
    req.user = userExists;

    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};
