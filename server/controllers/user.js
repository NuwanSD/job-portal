const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");

const UserController = {
  getUsers: (req, res) => {
    UserModel.getAllUsers((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      } else {
        return res.json(result);
      }
    });
  },

  getUserById: (req, res) => {
    const user_id = req.params.id;

    UserModel.getUser(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching job seeker");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveUser: async (req, res) => {
    const {
      user_id,
      username,
      name,
      email,
      phone,
      city,
      country,
      password,
      role,
    } = req.body;

    if (
      user_id === undefined ||
      username === undefined ||
      name === undefined ||
      email === undefined ||
      phone === undefined ||
      city === undefined ||
      country === undefined ||
      password === undefined ||
      role === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    try {
      //Hash passwords
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = {
        user_id,
        username,
        name,
        email,
        phone,
        city,
        country,
        password: hashPassword,
        role,
      };

      UserModel.saveUser(newUser, (err, result) => {
        if (err) {
          return res.status(500).send("Error saving job seeker");
        }
        return res.status(201).json({
          newUser,
        });
      });
    } catch (err) {
      return res.status(500).send("Error hashing password");
    }
  },

  deleteUser: (req, res) => {
    const user_id = req.params.id;
    UserModel.deleteUser(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting job seeker");
      }
      return res.status(204).send();
    });
  },

  updateUser: (req, res) => {
    const user_id = req.params.id;

    const updatedData = req.body;

    UserModel.updateUser(user_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res
        .status(200)
        .json({ message: "Job Seeker updated successfully" });
    });
  },
};

module.exports = UserController;
