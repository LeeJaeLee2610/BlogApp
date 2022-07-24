const mongoose = require("mongoose");
const AutoIncre = require("mongoose-sequence")(mongoose);

const Article = mongoose.Schema({
  // id bai viet
  _id: { type: Number },
  image_path: { type: String, default: none },
  title: { type: String },
  hashtag: { type: String },
  cmts: {
    any: [
      {
        uid: { type: Number },
        avatar_path: { type: String },
        blogID: { type: String },
      },
    ],
  },
  likes: {
    any: [
      {
        uid: { type: Number },
      },
    ],
  },
  created: { type: Date, default: new Date(Date.now()) },
  // id user cua bai viet
  uid: { type: Number },
});

Article.plugin(AutoIncre);

module.exports = mongoose.model("Article", Article);
