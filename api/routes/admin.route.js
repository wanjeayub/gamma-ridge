const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Loan = require("../models/Loan");
const User = require("../models/User");

const router = express.Router();
// add admin

// Admin registration
router.post("/register", async (req, res) => {
  const { email, password, idNumber } = req.body;

  // Check if admin is authenticated (this can vary based on your setup)
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Adjust as per your JWT setup

  if (decodedToken.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new User({
      email,
      password: hashedPassword,
      idNumber,
      role: "admin",
    });
    await newAdmin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating admin", error });
  }
});

// Middleware to authenticate and check admin role
const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    if (decoded.role !== "admin")
      return res.status(403).json({ error: "Admin access required" });
    req.user = decoded;
    next();
  });
};

// Get all loans
router.get("/loans", authenticateAdmin, async (req, res) => {
  const loans = await Loan.find().populate("userId", "email idNumber");
  res.json(loans);
});

// Update loan status (approve/reject)
router.patch("/loans/:id", authenticateAdmin, async (req, res) => {
  const { status } = req.body;
  try {
    await Loan.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Loan status updated" });
  } catch (error) {
    res.status(400).json({ error: "Error updating loan status" });
  }
});

module.exports = router;
