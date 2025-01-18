const JobService = require("../services/jobService");

const JobController = {
  getJobs: (req, res) => {
    JobService.getAllJobs((err, result) => {
      if (err) {
        return res.status(500).send("Database error");
      }

      return res.json(result);
    });
  },

  getJobById: (req, res) => {
    const job_id = req.params.id;
    JobService.getJobById(job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
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

    JobService.saveJob(newJob, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(201).send();
    });
  },

  deleteJob: (req, res) => {
    const job_id = req.params.id;
    JobService.deleteJobById(job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(204).send();
    });
  },
};

module.exports = JobController;
