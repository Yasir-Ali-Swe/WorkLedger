import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["PROJECT_MANAGER", "TEAM_MEMBER"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
