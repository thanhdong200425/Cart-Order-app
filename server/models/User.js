import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        name: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
