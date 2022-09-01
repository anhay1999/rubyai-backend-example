const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const MyModel = mongoose.model("Post", Post);
MyModel.find({}, function (err, docs) {
  console.log("docs: ", docs);
});
module.exports = mongoose.model("Post", Post);
