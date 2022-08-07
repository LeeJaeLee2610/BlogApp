const express = require("express");
const router = express.Router();
const InfoUserController = require("../controllers/InfoUserController");
const multer = require("multer");
const helpers = require("../helpers.js");

router.get("/getAllInfos", InfoUserController.getAllInfoUsers);

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "D:/BlogApp/client/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  fileFilter: helpers.imageFilter,
});

// router.post(
//   "/addInfo/:uid",
//   upload.single("image"),
//   InfoUserController.addInfoUser
// );

router.put(
  "/updateInfo/:uid",
  upload.single("image"),
  InfoUserController.updateInfoUser
);

router.get("/getInfoByUid/:uid", InfoUserController.getInfoUserByUid);
router.get("/get3infos", InfoUserController.get3InfoSA);
router.get("/get10infos", InfoUserController.get10InfoSA);
router.get("/get3infos1/:uid", InfoUserController.get3InfoSA1);
router.get("/get10infos1/:uid", InfoUserController.get10InfoSA1);
router.get("/get3infoFL/:uid", InfoUserController.get3InfoFL);
router.get("/get10infoFL/:uid", InfoUserController.get10InfoFL);

module.exports = router;
