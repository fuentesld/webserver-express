const hbs = require("hbs");

hbs.registerHelper("getAnio", () => new Date().getFullYear());
hbs.registerHelper("getEmpresa", () => "SIYAU");
