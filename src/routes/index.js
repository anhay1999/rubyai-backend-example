const newsRouter = require("./news");
const postsRouter = require("./posts");
const siteRouter = require("./site");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/posts", postsRouter);
  app.use("/", siteRouter);
  app.post("/search", (req, res) => {
    // res.render("search");
    console.log(req.body);
    res.send("");
  });
}
module.exports = route;
