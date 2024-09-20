const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  idNumber: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" }, // user or admin
});

module.exports = mongoose.model("User", UserSchema);
