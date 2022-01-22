const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  username: { type: String },
});

module.exports = User = mongoose.model("User", userSchema);
