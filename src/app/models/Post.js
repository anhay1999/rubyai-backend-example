const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
var mongooseDelete = require("mongoose-delete");
mongoose.plugin(slug);
const Post = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoUrl: { type: String },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);
//
Post.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};
Post.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("Post", Post);
