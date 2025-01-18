const PostedJobService = require("../services/postedJobService");

const PostedJobController = {
  getPostedJobs: (req, res) => {
    PostedJobService.getAllPostedJobs((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getPostedJobById: (req, res) => {
    const recruiter_id = req.params.rid;
    const job_id = req.params.jid;
    PostedJobService.getPostedJobById(recruiter_id, job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  savePostedJob: (req, res) => {
    const { posted_job_id, recruiter_id, job_id, posted_date, status } =
      req.body;

    if (
      posted_job_id === undefined ||
      recruiter_id === undefined ||
      job_id === undefined ||
      posted_date === undefined ||
      status === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newPostedJob = {
      posted_job_id,
      recruiter_id,
      job_id,
      posted_date,
      status,
    };

    PostedJobService.savePostedJob(newPostedJob, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send();
    });
  },

  deletePostedJob: (req, res) => {
    const recruiter_id = req.params.rid;
    const job_id = req.params.jid;
    PostedJobService.deletePostedJob(recruiter_id, job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updatePostedJob: (req, res) => {
    const recruiter_id = req.params.rid;
    const job_id = req.params.jid;
    const updatedJobData = req.body;

    PostedJobService.updatePostedJob(
      recruiter_id,
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
