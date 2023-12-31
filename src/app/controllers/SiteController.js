const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses:
            multipleMongooseToObject(
              courses,
            ),
        });
      })
      .catch((err) => next(err));

    // res.render("home");
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
