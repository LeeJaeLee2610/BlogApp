const mongoose = require("mongoose");
const AutoIncre = require("mongoose-sequence")(mongoose);

const User = mongoose.Schema(
  {
    _id: { type: Number },
    username: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    follow: { any: Array },
  },
  { _id: false }
);

User.plugin(AutoIncre);

module.exports = mongoose.model("User", User);
