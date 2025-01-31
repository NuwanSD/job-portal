const RecruiterModel = require("../models/recruiter");

const RecruiterController = {
  getAllRecord: (req, res) => {
    RecruiterModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.json(result);
    });
  },

  getDetailById: (req, res) => {
    const user_id = req.params.id;

    RecruiterModel.getOne(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching recruiter");
      }

      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }

      return res.json(result);
    });
  },

  saveRecord: (req, res) => {
    const { user_id, description, looking_for, photo_url } = req.body;

    if (
      user_id === undefined ||
      description === undefined ||
      looking_for === undefined ||
      photo_url === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newRecruiter = {
      user_id,
      description,
      looking_for,
      photo_url,
    };

    RecruiterModel.saveRecord(newRecruiter, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(201).json({
        message: "Recruiter saved successfully",
      });
    });
  },

  deleteRecord: (req, res) => {
    const user_id = req.params.id;

    RecruiterModel.deleteRecord(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting recruiter");
      }

      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const user_id = req.params.id;

    const updatedRecruiterData = req.body;

    RecruiterModel.updateRecord(
      user_id,
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
