const newsRouter = require("./news");
const meRouter = require("./me");
const postsRouter = require("./posts");
const siteRouter = require("./site");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/posts", postsRouter);
  app.use("/", siteRouter);
  app.post("/search", (req, res) => {
    // res.render("search");
    console.log(req.body);
    res.send("");
  });
}
module.exports = route;
