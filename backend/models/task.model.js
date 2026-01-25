import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      title: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["TO_DO", "IN_PROGRESS", "REVIEW", "DONE"],
      default: "TO_DO",
    },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "LOW",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dueDate:{
      type:Date,
      default:null,
    }
  },
  { timestamps: true },
);

const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
