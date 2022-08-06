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

module.exports = router;
