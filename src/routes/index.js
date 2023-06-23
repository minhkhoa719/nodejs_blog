import router from "./news";

const route = (app) => {
  //home page
  app.get("/", (req, res) => {
    res.render("home");
  });
  //news page
  app.use("/news", router);
  //search page
  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.post("/search", (req, res) => {
    res.send("post success");
    console.log(req.body);
  });
};

export default route;
