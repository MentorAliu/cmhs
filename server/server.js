const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/storedUsers");

app.post("/api/register", async (req, res) => {
  const { email, password, username } = req.body;
  console.log(req.body);
  try {
    const newUser = await User.create({
      email,
      password,
      username,
    });
    newUser.save();
    res.json({ status: "user created" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    return res.json({ status: "found", user: true });
  } else {
    return res.json({ status: "not found", user: false });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
