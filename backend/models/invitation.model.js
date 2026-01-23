import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    invitedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "DECLINED", "EXPIRED"],
      default: "PENDING",
    },
    role: {
      type: String,
      enum: ["PROJECT_MANAGER", "TEAM_MEMBER"],
      default: "TEAM_MEMBER",
    },
  },
  { timestamps: true },
);

const invitationModel = mongoose.model("Invitation", invitationSchema);

export default invitationModel;
