const express = require("express");
const router = express.Router();
const {
  handleLogin,
  handleRegister,
  handleForgetPassword,
  handleResetPassword,
} = require("../controllers/user");

//login
router.route("/").post(handleLogin);
//Register
router.route("/register").post(handleRegister);
//Forgetpassword
router.route("/forgetpassword").post(handleForgetPassword);
//Resetpassword
router.route("/resetpassword/:token").post(handleResetPassword);
//UpdateProfile
module.exports = router;
