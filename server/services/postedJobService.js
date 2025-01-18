const PostedJobModel = require("../models/postedJob");

const getAllPostedJobs = (callback) => {
  PostedJobModel.getAllPostedJobs(callback);
};

const getPostedJobById = (recruiter_id, job_id, callback) => {
  PostedJobModel.getPostedJob(recruiter_id, job_id, callback);
};

const savePostedJob = (job_data, callback) => {
  PostedJobModel.savePostedJob(job_data, callback);
};

const deletePostedJob = (recruiter_id, job_id, callback) => {
  PostedJobModel.deletePostedJob(recruiter_id, job_id, callback);
};

const updatePostedJob = (newJobData, recruiter_id, job_id, callback) => {
  PostedJobModel.updatePostedJob(newJobData, recruiter_id, job_id, callback);
};

module.exports = {
  getAllPostedJobs,
  getPostedJobById,
  savePostedJob,
  deletePostedJob,
  updatePostedJob,
};
