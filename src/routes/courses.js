const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CourseController");

router.get(
  "/:slug",
  coursesController.show,
);

module.exports = router;
