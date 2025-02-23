const PostedJobModel = require("../models/postedJob");

const PostedJobController = {
  getPostedJobs: (req, res) => {
    PostedJobModel.getAllPostedJobs((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getPostedJobById: (req, res) => {
    const posted_job_id = req.params.pid;

    PostedJobModel.getPostedJob(posted_job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  savePostedJob: (req, res) => {
    const {
      posted_job_id,
      user_id,
      job_id,
      salary,
      posted_date,
      expire_date,
      job_type,
      job_location,
      description,
      job_level,
      experience,
      status,
    } = req.body;

    if (
      posted_job_id === undefined ||
      user_id === undefined ||
      job_id === undefined ||
      salary === undefined ||
      posted_date === undefined ||
      expire_date === undefined ||
      job_type === undefined ||
      job_location === undefined ||
      description === undefined ||
      job_level === undefined ||
      experience === undefined ||
      status === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newPostedJob = {
      posted_job_id,
      user_id,
      job_id,
      salary,
      posted_date,
      expire_date,
      job_type,
      job_location,
      description,
      job_level,
      experience,
      status,
    };

    PostedJobModel.savePostedJob(newPostedJob, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send();
    });
  },

  deletePostedJob: (req, res) => {
    const posted_job_id = req.params.pid;

    PostedJobModel.deletePostedJob(posted_job_id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updatePostedJob: (req, res) => {
    const posted_job_id = req.params.pid;

    const updatedJobData = req.body;

    PostedJobModel.updatePostedJob(
      posted_job_id,
      updatedJobData,
      (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        return res.status(200).send("Job updated successfully");
      }
    );
  },
};

module.exports = PostedJobController;
