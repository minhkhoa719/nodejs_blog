class NewsController {
  index(req, res) {
    res.render("news");
  }
}

export default new NewsController();

// const NewsController = () => {
//   const index = (req, res) => {
//     res.render("news");
//   };
//   return index;
// };

// export default NewsController;
