const Post = require("../models/Post");
const { mongooseToObject } = require("../../util/mongoose");
class PostController {
  // [GET] /posts/:slug
  show(req, res, next) {
    Post.findOne({ slug: req.params.slug })
      .then((post) => {
        res.render("posts/show", { post: mongooseToObject(post) });
      })
      .catch(next);
  }
  // [GET] /posts/create
  create(req, res, next) {
    res.render("posts/create");
  }
  // [POST] /posts/store
  store(req, res, next) {
    // res.render("posts/create");
    const formData = req.body;
    formData.image = req.body.videoUrl;
    const post = new Post(formData);
    post
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
}

module.exports = new PostController();
