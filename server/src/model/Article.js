const mongoose = require("mongoose");
const AutoIncre = require("mongoose-sequence")(mongoose);

const Article = mongoose.Schema({
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
  uid: { type: Number },
});

Article.plugin(AutoIncre);

module.exports = mongoose.model("Article", Article);
