const JobSeekerService = require("../services/jobSeekerService");

const JobSeekerController = {
  getSeekers: (req, res) => {
    JobSeekerService.getAllJobSeekers((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      } else {
        return res.json(result);
      }
    });
  },

  getSeekerById: (req, res) => {
    const seeker_id = req.params.id;
    JobSeekerService.getJobSeekerById(seeker_id, (err, result) => {
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
      address,
      city,
      country,
      bio,
    } = req.body;

    if (
      !seeker_id ||
      !name ||
      !email ||
      !phone ||
      !birth_date ||
      !address ||
      !city ||
      !country ||
      !bio
    ) {
      return res.status(400).send("All field are required");
    }

    const newSeeker = {
      seeker_id,
      name,
      email,
      phone,
      birth_date,
      address,
      city,
      country,
      bio,
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
};

module.exports = JobSeekerController;
