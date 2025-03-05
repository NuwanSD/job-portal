const express = require("express");

const UserController = require("../controllers/user");

const Auth = require("../middleware/auth").default;

const router = express.Router();

router.get("/user", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.get("/user/username/:username", UserController.getUserByUsername);
router.post("/user/register", UserController.saveUser);
router.delete("/user/:id", UserController.deleteUser);
router.patch("/user/update", Auth, UserController.updateUser);

//Authentication
router.post("/auth/login", UserController.userLogin);
router.post("/auth/user", UserController.verifyUser);

module.exports = router;
