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
    const user_id = req.params.uid;
    const job_id = req.params.jid;

    PostedJobModel.getPostedJob(user_id, job_id, (err, result) => {
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
    const { posted_job_id, user_id, job_id, posted_date, status } = req.body;

    if (
      posted_job_id === undefined ||
      user_id === undefined ||
      job_id === undefined ||
      posted_date === undefined ||
      status === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newPostedJob = {
      posted_job_id,
      user_id,
      job_id,
      posted_date,
      status,
    };

    PostedJobModel.savePostedJob(newPostedJob, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send();
    });
  },

  deletePostedJob: (req, res) => {
    const user_id = req.params.uid;

    const job_id = req.params.jid;

    PostedJobModel.deletePostedJob(user_id, job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updatePostedJob: (req, res) => {
    const user_id = req.params.uid;

    const job_id = req.params.jid;

    const updatedJobData = req.body;

    PostedJobModel.updatePostedJob(
      user_id,
      job_id,
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
