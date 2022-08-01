const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/getAllUsers", UserController.getAllUser);
router.post("/addUser", UserController.addUser);
router.put("/updatePass/:_id", UserController.updatePass);
router.delete("/deleteUser/:_id", UserController.deleteUser);
router.get("/getUserByUid/:_id", UserController.getUserByUid);
router.put("/updateFollow/:_id", UserController.updateFollow);
router.get("/setUserSession/:_id", UserController.setUserSession);
router.get("/getUserSession", UserController.getUserSession);

module.exports = router;
