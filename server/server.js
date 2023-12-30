const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
const profileRoute = require("./routes/profileRoute.js");
// const profileRoute = require("./routes/profileRoute.js");
const userRoute = require("./routes/userRoute.js");

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
//  MongoDB
mongoose
  .connect(
    "mongodb+srv://hp523674:harii0@solace.wfupvri.mongodb.net/solace?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
// Login
app.use("/login", userRoute);
// Register
app.use("/", userRoute);
// Forget Password
app.use("/", userRoute);

// Profile
app.use("/profile", profileRoute);
