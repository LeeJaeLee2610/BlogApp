const express = require("express");
const multer = require("multer");
const router = express.Router();
const helpers = require("../helpers.js");
const ArticleController = require("../controllers/ArticleController");

router.get("/getAllArticles", ArticleController.getAllArticles);

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/BlogApp/client/public/imagesArticle");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  fileFilter: helpers.imageFilter,
});

router.post(
  "/addArticle/:uid",
  upload.single("image"),
  ArticleController.addArticle
);

module.exports = router;
