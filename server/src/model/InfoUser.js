const mongoose = require("mongoose");

const InfoUser = mongoose.Schema({
  image_path: { type: String, default: none },
  firstname: { type: String },
  lastname: { type: String },
  blogID: { type: String },
  dob: { type: Date, default: null },
  story: { type: String },
  uid: { type: Number },
});

module.exports = mongoose.model("InfoUser", InfoUser);
