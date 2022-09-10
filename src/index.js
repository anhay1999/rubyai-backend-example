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
    helpers: {
      sum: (a, b) => {
        return a + b;
      },
      sortable: (column, sort) => {
        const currentColumn = column === sort.column;
        const icons = {
          default: "oi oi-elevator",
          asc: "oi oi-sort-ascending",
          desc: "oi oi-sort-descending",
        };
        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        const icon = icons[currentColumn ? sort.type : "default"];
        const type = types[currentColumn ? sort.type : "default"];

        return `<a href="?_sort&column=${column}&type=${type}">
                  <span class="${icon}"></span>
                </a>`;
      },
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");
route(app);
//routes init

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
