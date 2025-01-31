const RecruiterModel = require("../models/recruiter");
const bcrypt = require("bcryptjs");

const RecruiterController = {
  getRecruiters: (req, res) => {
    RecruiterModel.getAllRecruiters((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      }

      return res.json(result);
    });
  },

  getRecruiterById: (req, res) => {
    const recruiter_id = req.params.id;
    RecruiterModel.getRecruiter(recruiter_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching recruiter");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveRecruiter: async (req, res) => {
    const {
      recruiter_id,
      name,
      email,
      phone,
      username,
      password,
      city,
      country,
    } = req.body;

    if (
      recruiter_id === undefined ||
      name === undefined ||
      email === undefined ||
      phone === undefined ||
      username === undefined ||
      password === undefined ||
      city === undefined ||
      country === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    try {
      //Hash passwords
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newRecruiter = {
        recruiter_id,
        name,
        email,
        phone,
        username,
        password: hashPassword,
        city,
        country,
      };

      RecruiterModel.saveRecruiter(newRecruiter, (err, result) => {
        if (err) {
          return res.status(500).send("Error saving recruiter");
        }

        return res.status(201).json({
          newRecruiter,
          message: "Recruiter saved successfully",
        });
      });
    } catch (err) {
      return res.status(500).send("Error hashing password");
    }
  },

  deleteRecruiter: (req, res) => {
    const recruiter_id = req.params.id;
    RecruiterModel.deleteRecruiter(recruiter_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting recruiter");
      }

      return res.status(204).send();
    });
  },

  updateRecruiter: (req, res) => {
    const recruiter_id = req.params.id;
    const updatedRecruiterData = req.body;
    RecruiterModel.updateRecruiter(
      recruiter_id,
      updatedRecruiterData,
      (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        return res
          .status(200)
          .json({ message: "Recruiter updated successfully" });
      }
    );
  },
};

module.exports = RecruiterController;
