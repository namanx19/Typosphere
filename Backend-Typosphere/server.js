import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);

// static assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
