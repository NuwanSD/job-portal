const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.saveUser);
router.delete("/user/:id", UserController.deleteUser);
router.patch("/user/:id", UserController.updateUser);
router.post("/user/login", UserController.userLogin);

module.exports = router;
