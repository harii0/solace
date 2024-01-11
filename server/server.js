const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./model/User.js");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
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
app.use("/updateprofile", userRoute);

// Get User

app.post("/get-user", async (req, res) => {
  try {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Missing Authorization header" });
    }

    const token = tokenHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token is null" });
    }

    try {
      const decodedToken = jwt.verify(token, "solace");

      const user = await User.findOne({ email: decodedToken.email });

      if (user) {
        const userData = {
          username: user?.username,
          email: user?.email,
          age: user?.age,
          gender: user?.gender,
          isAdmin: user?.isAdmin,
          isDoctor: user?.isDoctor,
        };
        return res.json({ userData });
      }

      return res.status(401).json({ message: "No user found" });
    } catch (tokenError) {
      console.error("Token error:", tokenError);

      if (tokenError.name === "JsonWebTokenError") {
        return res
          .status(401)
          .json({ message: "Unauthorized: Malformed token" });
      }

      return res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
