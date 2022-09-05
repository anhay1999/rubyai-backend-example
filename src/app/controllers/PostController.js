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
  // [GET] /posts/:id/edit
  edit(req, res, next) {
    Post.findById(req.params.id)
      .then((post) => {
        res.render("posts/edit", { post: mongooseToObject(post) });
      })
      .catch(next);
  }
  //[PUT] /posts/:id/_method=PUT
  update(req, res, next) {
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/posts"))
      .catch(next);
  }
}

module.exports = new PostController();
