require("dotenv").config();
const express = require("express");
const connectDB = require("./configs/db");

const app = express();

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Server running successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

