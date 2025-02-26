const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserController = {
  getUsers: (req, res) => {
    UserModel.getAllUsers((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      } else {
        return res.json(result);
      }
    });
  },

  getUserById: (req, res) => {
    const user_id = req.params.id;

    UserModel.getUserById(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching job seeker");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  getUserByUsername: (req, res) => {
    const username = req.params.username;

    UserModel.getUserByUsername(username, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      if (result.length === 0) {
        return res.status(404).send("User wat not found");
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

  userLogin: async (req, res) => {
    const { username, password } = req.body;

    try {
      //Check if user exists
      UserModel.getUserByUsername(username, async (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }

        if (result.length === 0) {
          return res.status(404).send("User not found");
        }

        //Password is correct
        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return res.status(401).send("Invalid credentials");
        }

        //Create and assign a token
        const token = jwt.sign(
          { userId: user.user_id },
          process.env.ACCESS_TOKEN_SECRET
        );

        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000, //1 day
        });

        res.send({
          message: "success",
        });

        //res.header("auth-token", token).send(token);
      });
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  },

  userCookie: async (req, res) => {
    try {
      const cookie = req.cookies["jwt"];
      //console.log("Receivd JWT: ", cookie);

      if (!cookie) {
        //console.log("No token found in cookies");
        return res.status(401).json({ error: "Unauthenticated" });
      }

      const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
      //console.log("Decoded Token Claims:", claims);

      const user_id = claims.userId || claims.user_id;
      //console.log("Extracted user_id:", user_id);

      UserModel.getUserById(user_id, (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Error fetching user" });
        }

        if (!result || result.length === 0) {
          //console.log("User not found for ID:", user_id);
          return res.status(404).json({ error: "User not found" });
        }

        const user = result[0];
        const { password, ...data } = user;

        res.json(data);
      });
    } catch (error) {
      //console.log("Error in userCookie:", error);
      return res.status(500).json({ error: "Invalid Token" });
    }
  },

  userLogout: async (req, res) => {
    try {
      // Clear the JWT cookie
      res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });

      //console.log("User logged out, JWT cookie cleared");

      res.json({
        message: "Logout successful",
      });
    } catch (error) {
      //console.error("Error during logout:", error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = UserController;
