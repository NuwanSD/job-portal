const RecruiterDetailModel = require("../models/recruiterDetails");

const RecruiterController = {
  getAllRecord: (req, res) => {
    RecruiterDetailModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      }

      return res.json(result);
    });
  },

  getDetailById: (req, res) => {
    const recruiter_id = req.params.id;
    RecruiterDetailModel.getOne(recruiter_id, (err, result) => {
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
    const { recruiter_id, description, looking_for, photo_url } = req.body;

    if (
      recruiter_id === undefined ||
      description === undefined ||
      looking_for === undefined ||
      photo_url === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newRecruiter = {
      recruiter_id,
      description,
      looking_for,
      photo_url,
    };

    RecruiterDetailModel.saveRecord(newRecruiter, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(201).json({
        message: "Recruiter saved successfully",
      });
    });
  },

  deleteRecord: (req, res) => {
    const recruiter_id = req.params.id;
    RecruiterDetailModel.deleteRecord(recruiter_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting recruiter");
      }

      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const recruiter_id = req.params.id;
    const updatedRecruiterData = req.body;

    RecruiterDetailModel.updateRecord(
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
