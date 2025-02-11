import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import { validateRequest } from "./helpers/checkRequest.js";
import { createUser } from "./repository/UserRepository.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/sign-in", (req, res) => {
    console.log(req.body);
});

app.post("/sign-up", async (req, res) => {
    // Try to validate the request first
    const validationError = validateRequest(req.body);
    if (validationError.length > 0)
        return res.status(400).json({
            errors,
        });

    // Create a new user if no error is found
    const { name, email, password } = res.body;
    try {
        const newUser = await createUser({
            name,
            email,
            password,
        });
        return res.status(200).json({ user: newUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
