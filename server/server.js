const express = require("express");
// const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/User");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const app = express();

app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => console.log(`Server running on port 8080`));
