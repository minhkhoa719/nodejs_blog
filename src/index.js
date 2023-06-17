import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "src/public")));
console.log("PATH:", path.join(__dirname, "src/public"));
// HTTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
