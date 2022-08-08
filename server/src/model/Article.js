const mongoose = require("mongoose");
const AutoIncre = require("mongoose-sequence")(mongoose);

const Article = mongoose.Schema(
  {
    // id bai viet
    _id: { type: Number },
    image_path: { type: String, default: none },
    title: { type: String },
    hashtag: { type: String },
    cmts: [
      {
        uid: { type: Number },
        avatar_path: { type: String },
        blogID: { type: String },
        time: { type: Date, default: new Date(Date.now()) },
      },
    ],
    likes: [
      {
        uid: { type: Number },
        time: { type: Date, default: new Date(Date.now()) },
      },
    ],
    created: { type: Date, default: new Date(Date.now()) },
    // id user cua bai viet
    uid: { type: Number },
  },
  { _id: false }
);

Article.plugin(AutoIncre);

module.exports = mongoose.model("Article", Article);
