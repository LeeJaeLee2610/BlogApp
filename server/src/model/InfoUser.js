const mongoose = require("mongoose");
const User = require("./User");

const InfoUser = mongoose.Schema({
  image_path: { type: String, default: null },
  firstname: { type: String },
  lastname: { type: String },
  blogID: { type: String },
  dob: { type: String, default: null },
  story: { type: String },
  uid: { type: Number },
  like: { type: Number, default: 0 },
  follower: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
});

module.exports = mongoose.model("InfoUser", InfoUser);
