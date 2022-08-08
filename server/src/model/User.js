const mongoose = require("mongoose");
const AutoIncre = require("mongoose-sequence")(mongoose);

const User = mongoose.Schema(
  {
    _id: { type: Number },
    username: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: new Date(Date.now()) },
    following: { type: [], default: null },
    followers: { type: [], default: null },
    likes: { type: [], default: null },
  },
  { _id: false }
);

User.plugin(AutoIncre);

module.exports = mongoose.model("User", User);
