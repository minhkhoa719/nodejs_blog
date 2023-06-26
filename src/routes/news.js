// import express from "express";
// import newsController from "../app/controllers/NewsController";
// const router = express.Router();
// router.use("/", newsController.index);

// export default router;

//run without ES6 modoule

const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get(
  "/:slug",
  newsController.show,
);
router.get("/", newsController.index);

module.exports = router;
