// import router from "./news.js";

// const route = (app) => {
//   //home page
//   app.get("/", (req, res) => {
//     res.render("home");
//   });
//   //news page
//   app.use("/news", router);
//   //search page
//   app.get("/search", (req, res) => {
//     res.render("search");
//   });

//   app.post("/search", (req, res) => {
//     res.send("post success");
//     console.log(req.body);
//   });
// };

// export default route;

//run without ES6 modoule

const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = route;
