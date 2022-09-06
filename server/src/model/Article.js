const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Article = mongoose.Schema({
  files: {
    file_name: { type: String, default: null },
    ext_name: { type: String, default: null },
  },
  title: { type: String },
  hashtag: [],
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
  uid: { type: Number },
});

Article.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Article", Article);
