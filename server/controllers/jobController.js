const JobModel = require("../models/job");

const JobController = {
  getJobs: (req, res) => {
    JobModel.getAllJobs((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      }

      return res.json(result);
    });
  },

  getJobById: (req, res) => {
    const job_id = req.params.id;
    JobModel.getJob(job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveJob: (req, res) => {
    const { job_id, title, description } = req.body;

    if (!job_id || !title || !description) {
      return res.status(400).send("All field are required");
    }

    const newJob = { job_id, title, description };

    JobModel.saveJob(newJob, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(201).send();
    });
  },

  deleteJob: (req, res) => {
    const job_id = req.params.id;
    JobModel.deleteJob(job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(204).send();
    });
  },

  updateJob: (req, res) => {
    const job_id = req.params.id;
    const updatedData = req.body;

    JobModel.updateJob(job_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(200).send("Job updated successfully");
    });
  },
};

module.exports = JobController;
