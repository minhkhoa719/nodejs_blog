const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
class CourseController {
  // [GET] courses/:slug
  show(req, res, next) {
    Course.findOne({
      slug: req.params.slug,
    })
      .then((course) => {
        res.json(course);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new CourseController();
