
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from frontend
  credentials: true,
}));

app.use(express.json());

app.use("/api/items", require("./routes/itemRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));