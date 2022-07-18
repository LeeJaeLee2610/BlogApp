const mongoose = require("mongoose");
const AutoIncre = require("mongoose-sequence")(mongoose);

const User = mongoose.Schema(
  {
    _id: { type: Number },
    createdAt: { type: Date, default: Date.now },
    username: { type: String },
    password: { type: String },
    friendsId: { any: Array },
  },
  { _id: false }
);

User.plugin(AutoIncre);

module.exports = mongoose.model("User", User);
