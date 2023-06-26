// import express from "express";

// import { engine } from "express-handlebars";
// import path from "path";
// import route from "./routes/index.js";

// const app = express();
// const port = 3000;
// const __dirname = path.resolve();

// app.use(express.static(path.join(__dirname, "src/public")));

// // Template engine
// app.engine("hbs", engine({ extname: ".hbs" }));
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "src/resources/views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Routes init
// route(app);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

//run without ES6 modoule
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const {
  engine,
} = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db");

// connect DB
db.connect();

// app.use(morgan('combined'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.engine(
  ".hbs",
  engine({ extname: ".hbs" }),
);
app.set("view engine", ".hbs");
app.set(
  "views",
  path.join(
    __dirname,
    "resources",
    "views",
  ),
);

app.use(
  express.static(
    path.join(__dirname, "public"),
  ),
);

route(app);

app.listen(port, () => {
  console.log(
    ` App listening on port http://localhost:${port}`,
  );
});
