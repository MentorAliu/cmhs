require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const connectDB = require("./config/db");
// const errorHandler = require("./middleware/error");

// //Connecting DB

// connectDB();

// const app = express();

// app.use(express.json());
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/private", require("./routes/private"));

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () =>
//   console.log(`Server is running on port ${PORT}`)
// );

// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Logged error: ${err}`);
//   server.close(() => process.exit(1));
// });

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "LoginSystem",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "INSER INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => console.log("Server running on port 3001"));
