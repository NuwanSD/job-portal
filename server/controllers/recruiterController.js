const RecruiterService = require("../services/recruiterService");

const RecruiterController = {
  getRecruiters: (req, res) => {
    RecruiterService.getAllRecruiters((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      }

      return res.json(result);
    });
  },

  getRecruiterById: (req, res) => {
    const recruiter_id = req.params.id;
    RecruiterService.getRecruiterById(recruiter_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error fetching recruiter");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveRecruiter: (req, res) => {
    const { recruiter_id, name, email, phone, address, description } = req.body;

    if (
      !recruiter_id ||
      !name ||
      !email ||
      !phone ||
      !address ||
      !description
    ) {
      return res.status(400).send("All field are required");
    }

    const newRecruiter = {
      recruiter_id,
      name,
      email,
      phone,
      address,
      description,
    };

    RecruiterService.saveRecruiter(newRecruiter, (err, result) => {
      if (err) {
        return res.status(500).send("Error saving recruiter");
      }

      return res.status(201).json({
        message: "Recruiter saved successfully",
      });
    });
  },

  deleteRecruiter: (req, res) => {
    const recruiter_id = req.params.id;
    RecruiterService.deleteRecruiter(recruiter_id, (err, result) => {
      if (err) {
        return res.status(500).send("Error deleting recruiter");
      }

      return res.status(204).send();
    });
  },

  updateRecruiter: (req, res) => {
    const recruiter_id = req.params.id;
    const updatedRecruiterData = req.body;
    RecruiterService.updateRecruiter(
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
