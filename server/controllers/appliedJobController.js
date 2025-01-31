const AppliedJobModel = require("../models/appliedJob");

const AppliedJobController = {
  getAppliedJobs: (req, res) => {
    AppliedJobModel.getAllAppliedJobs((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getAppliedJobById: (req, res) => {
    const posted_job_id = req.params.pid;
    const seeker_id = req.params.sid;
    AppliedJobModel.getAppliedJob(posted_job_id, seeker_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      if (result.length === 0) {
        return res.status(404).send("Not Found");
      }
      return res.json(result);
    });
  },

  saveAppliedJob: (req, res) => {
    const { posted_job_id, seeker_id, applied_date } = req.body;

    if (
      posted_job_id === undefined ||
      seeker_id === undefined ||
      applied_date === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newAppliedJob = {
      posted_job_id,
      seeker_id,
      applied_date,
    };

    AppliedJobModel.saveAppliedJob(newAppliedJob, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send();
    });
  },

  deleteAppliedJob: (req, res) => {
    const posted_job_id = req.params.pid;
    const seeeker_id = req.params.sid;
    AppliedJobModel.deleteAppliedJob(
      posted_job_id,
      seeeker_id,
      (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        return res.status(204).send();
      }
    );
  },

  updateAppliedJob: (req, res) => {
    const posted_job_id = req.params.pid;
    const seeeker_id = req.params.sid;
    const updatedData = req.body;

    AppliedJobModel.updateAppliedJob(
      posted_job_id,
      seeeker_id,
      updatedData,
      (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        return res.status(200).send("Job updated successfully");
      }
    );
  },
};

module.exports = AppliedJobController;
