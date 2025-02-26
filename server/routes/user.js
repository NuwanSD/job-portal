const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.get("/user/username/:username", UserController.getUserByUsername);
router.post("/user/register", UserController.saveUser);
router.delete("/user/:id", UserController.deleteUser);
router.patch("/user/:id", UserController.updateUser);

//Athuentication
router.post("/auth/login", UserController.userLogin);
router.post("/auth/cookie", UserController.userCookie);
router.post("/auth/logout", UserController.userLogout);

module.exports = router;
