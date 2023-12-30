const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendMail = require("../utils/sendMail.js");
require("dotenv").config();

//login
async function handleLogin(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const token = jwt.sign(
        {
          email: req.body.email,
          password: req.body.password,
        },
        "solace"
      );
      loginUser = {
        id: user._id,
        username: user.username,
        email: user.email,
      };
      res.status(200).json({ message: "Success", token, loginUser });
    } else {
      res.status(401).json({ message: "Error" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//Register
async function handleRegister(req, res) {
  try {
    const userExists = await User.findOne({
      email: req.body.email,
    });

    if (userExists) {
      return res.json({ message: "User already exists", success: false });
    }

    // bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const { username, email, userType } = req.body;
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      userType,
    });
    res.status(201).json({ message: "User created ", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
}
//Forgetpassword
async function handleForgetPassword(req, res) {
  const email = req.body.email;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  //Get reset token
  const resetToken = user.getResetToken();
  console.log("bfr rst", resetToken);
  await user.save();
  //Create reset url
  const resetUrl = `http://localhost:5173/resetpassword/${resetToken}`;
  const message = `
    You have requested a password reset\n
    Please go to this link to reset your password\n
  `;
  sendMail(user.email, message, resetUrl);

  res.status(200).json({ message: "Email Sent" });
}

//Resetpassword

async function handleResetPassword(req, res) {
  const { token } = req.params;
  const resetpasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  console.log("rest", resetpasswordToken);
  const user = await User.findOne({
    resetpasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) return res.status(400).json({ message: "Invalid Token" });
  //Set new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  user.password = hashedPassword;
  user.resetpasswordToken = undefined;
  await user.save();

  res.status(200).json({ message: "Password reset successful" });
}
async function handleProfile(req, res) {}
module.exports = {
  handleLogin,
  handleRegister,
  handleForgetPassword,
  handleResetPassword,
  handleProfile,
};
