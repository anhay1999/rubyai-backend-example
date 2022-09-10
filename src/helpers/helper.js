const Handlebars = require("handlebars");
module.exports = {
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
    sort.type = ["asc", "desc"].includes(sort.type) ? sort.type : "default";
    const icon = icons[currentColumn ? sort.type : "default"];
    const type = types[currentColumn ? sort.type : "default"];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${column}&type=${type}`
    );

    const output = `<a href="${href}">
                <span class="${icon}"></span>
            </a>`;
    return new Handlebars.SafeString(output);
  },
};
