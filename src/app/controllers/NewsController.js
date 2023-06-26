// class NewsController {
//   index(req, res) {
//     res.render("news");
//   }
// }

// export default new NewsController();

// const NewsController = () => {
//   const index = (req, res) => {
//     res.render("news");
//   };
//   return index;
// };

// export default NewsController;

//run without ES6 modoule
class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("new detail");
  }
}

module.exports = new NewsController();
