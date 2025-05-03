import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: { type: String },

    lastName: { type: String },

    email: { type: String, required: true },

    group: { type: String, default: "0", unique: true },

    password: { type: String },

    image: { type: String, unique: true },

    // for Clerk
    clerkId: { type: String },

    role: { type: String, default: "student" },

    answers: [
      {
        type: String,
        default: "0",
      },
    ],

    result: { type: Number, default: 0 },

    loggedInAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: { createdAt: true, updatedAt: true }, 
  }
);

const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
