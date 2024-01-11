const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  specialization: {
    type: String,
    default: "",
  },
  rating: {
    type: Number,
    default: 0,
  },
  experience: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
