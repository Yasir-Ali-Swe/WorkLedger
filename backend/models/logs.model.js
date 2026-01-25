import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    actionType: {
      type: String,
      enum: [
        "USER_LOGIN",
        "PROJECT_CREATED",
        "TASK_ASSIGNED",
        "TASK_STATUS_UPDATED",
        "INVITATION_SENT",
        "INVITATION_ACCEPTED",
        "COMMENT_ADDED",
      ],
    },
    actorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    actorRole: {
      type: String,
      enum: ["PROJECT_MANAGER", "TEAM_MEMBER", "SYSTEM"],
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    entityType: {
      type: String,
      enum: ["PROJECT", "TASK", "INVITATION", "COMMENT", "USER"],
    },
    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "entityType",
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: false,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true },
);

const logModel = mongoose.model("Log", logSchema);
export default logModel;
