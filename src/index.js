const express = require("express");
const morgan = require("morgan");
const engine = require("express-handlebars");
const app = express();
const port = 8000;

const route = require("./routes");

app.use(express.static("./src/public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

//HTTP logger
//app.use(morgan("combined"));
//template engine
app.engine(
  ".hbs",
  engine.engine({
    extname: ".hbs",
    // defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");
route(app);
//routes init

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
