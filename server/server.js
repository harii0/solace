const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:__dirname+'/.env'});
const app = express();
const port = 3000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
