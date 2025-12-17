require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const authRoutes = require("./routes/authroutes");

const app = express();

app.use(cors());

// 2. Middleware to parse JSON
app.use(express.json());

// 3. Connect to Database
connectDB();

// 4. Mount Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server running successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});