const Post = require("../models/Post");
console.log("Post: ", Post);
class SiteController {
  // [GET] /
  index(req, res) {
    // res.render('home');
    Post.find({}, function (err, posts) {
      if (!err) {
        res.json(posts);
      } else {
        console.log("error");
        res.status(400).json({ error: "error!!!" });
      }
    });
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
