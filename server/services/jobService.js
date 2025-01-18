const JobModel = require("../models/job");

const getAllJobs = (callback) => {
  JobModel.getAllJobs(callback);
};

const getJobById = (job_id, callback) => {
  JobModel.getJob(job_id, callback);
};

const saveJob = (job_data, callback) => {
  JobModel.saveJob(job_data, callback);
};

const deleteJobById = (job_id, callback) => {
  JobModel.deleteJob(job_id, callback);
};

module.exports = {
  getAllJobs,
  getJobById,
  saveJob,
  deleteJobById,
};
