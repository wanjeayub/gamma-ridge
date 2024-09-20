const express = require("express");
const jwt = require("jsonwebtoken");
const Loan = require("../models/Loan");
const User = require("../models/User");

const router = express.Router();

// Middleware to authenticate JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = decoded;
    next();
  });
};

// Apply for loan
router.post("/apply-loan", authenticate, async (req, res) => {
  const { amount, duration } = req.body;
  try {
    const loan = new Loan({ userId: req.user.id, amount, duration });
    await loan.save();
    res.status(201).json({ message: "Loan application submitted" });
  } catch (error) {
    res.status(400).json({ error: "Error applying for loan" });
  }
});

// Get all loans for the authenticated user
router.get("/loans", authenticate, async (req, res) => {
  const loans = await Loan.find({ userId: req.user.id });
  res.json(loans);
});

module.exports = router;
