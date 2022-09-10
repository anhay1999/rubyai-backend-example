const express = require("express");
const morgan = require("morgan");
const engine = require("express-handlebars");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middlewares/SortMiddleware");

const app = express();
const port = 5000;

const route = require("./routes");
const db = require("./config/db");
db.connect();
app.use(express.static("./src/public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));
app.use(express.json());
app.use(SortMiddleware);
//HTTP logger
//app.use(morgan("combined"));
//template engine
app.engine(
  ".hbs",
  engine.engine({
    extname: ".hbs",
    // defaultLayout: "main"
    helpers: require("./helpers/helper"),
  })
);
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");
route(app);
//routes init

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
