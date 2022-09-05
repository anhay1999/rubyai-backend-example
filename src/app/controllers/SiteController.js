const Post = require("../models/Post");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // [GET] /
  index(req, res, next) {
    Post.find({})
      .then((posts) => {
        res.render("home", {
          posts: multipleMongooseToObject(posts),
        });
      })
      .catch(next);
    // .catch((error) => next(error));
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
