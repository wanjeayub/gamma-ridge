const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const path = require("path");
var __dirname = path.resolve();

// imports
const authRoutes = require("./routes/auth.route.js");
const loanRoutes = require("./routes/loan.route.js");
const adminRoutes = require("./routes/admin.route.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// path resolution

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "client", "dist", "index.html"));
});

// Routes
app.use("/auth", authRoutes);
app.use("/loan", loanRoutes);
app.use("/admin", adminRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
