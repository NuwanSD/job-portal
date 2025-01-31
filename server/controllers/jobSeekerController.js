const JobSeekerService = require("../services/jobSeekerService");
const JobSeekerModel = require("../models/jobSeeker");

const JobSeekerController = {
  getSeekers: (req, res) => {
    JobSeekerModel.getAllSeekers((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      } else {
        return res.json(result);
      }
    });
  },

  getSeekerById: (req, res) => {
    const seeker_id = req.params.id;

    JobSeekerModel.getSeeker(seeker_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching job seeker");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveJobSeeker: (req, res) => {
    const {
      seeker_id,
      name,
      email,
      phone,
      birth_date,
      city,
      country,
      password,
      username,
    } = req.body;

    if (
      seeker_id === undefined ||
      name === undefined ||
      email === undefined ||
      phone === undefined ||
      birth_date === undefined ||
      city === undefined ||
      country === undefined ||
      password === undefined ||
      username === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newSeeker = {
      seeker_id,
      name,
      email,
      phone,
      birth_date,
      city,
      country,
      password,
      username,
    };

    JobSeekerService.saveJobSeeker(newSeeker, (err, result) => {
      if (err) {
        return res.status(500).send("Error saving job seeker");
      }
      return res.status(201).json({
        message: "Job seeker saved successfully",
        seeker_id: result.seeker_id,
      });
    });
  },

  deleteJobSeeker: (req, res) => {
    const seeer_id = req.params.id;
    JobSeekerService.deleteJobSeeker(seeer_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting job seeker");
      }
      return res.status(204).send();
    });
  },

  updateJobSeeker: (req, res) => {
    const seeer_id = req.params.id;
    const updatedData = req.body;
    JobSeekerService.updateJobSeeker(seeer_id, updatedData, (err, result) => {
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
