const JobSeekerModel = require("../models/jobSeeker");

const JobSeekerController = {
  getAllRecord: (req, res) => {
    JobSeekerModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      } else {
        return res.json(result);
      }
    });
  },

  getRecordBySeekerId: (req, res) => {
    const user_id = req.params.id;

    JobSeekerModel.getOne(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching job seeker");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveRecord: (req, res) => {
    const { user_id, age, description, looking_for, photo_url } = req.body;

    if (
      user_id === undefined ||
      age === undefined ||
      description === undefined ||
      looking_for === undefined ||
      photo_url === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newSeeker = {
      user_id,
      age,
      description,
      looking_for,
      photo_url,
    };

    JobSeekerModel.saveRecord(newSeeker, (err, result) => {
      if (err) {
        return res.status(500).send("Error saving job seeker");
      }
      return res.status(201).json({
        message: "Job seeker saved successfully",
        user_id: result.user_id,
      });
    });
  },

  deleteRecord: (req, res) => {
    const user_id = req.params.id;
    JobSeekerModel.deleteRecord(user_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting job seeker");
      }
      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const user_id = req.params.id;
    const updatedData = req.body;
    JobSeekerModel.updateRecord(user_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res
        .status(200)
        .json({ message: "Job Seeker updated successfully" });
    });
  },
};

module.exports = JobSeekerController;
