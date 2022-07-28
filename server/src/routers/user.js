const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/getAllUsers", UserController.getAllUser);
router.post("/addUser", UserController.addUser);
router.put("/updatePass/:_id", UserController.updatePass);
router.delete("/deleteUser/:_id", UserController.deleteUser);
router.get("/getUserById/:_id", UserController.getUserById);
router.put("/updateFollow/:uid", UserController.updateFollow);

module.exports = router;