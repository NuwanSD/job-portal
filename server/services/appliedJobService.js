const AppliedJobModel = require("../models/appliedJob");

const getAllAppliedJobs = (callback) => {
  AppliedJobModel.getAllAppliedJobs(callback);
};

const getAppliedJob = (posted_job_id, seeeker_id, callback) => {
  AppliedJobModel.getAppliedJob(posted_job_id, seeeker_id, callback);
};

const saveAppliedJob = (new_data, callback) => {
  AppliedJobModel.saveAppliedJob(new_data, callback);
};

const deleteAppliedJob = (posted_job_id, seeeker_id, callback) => {
  AppliedJobModel.deleteAppliedJob(posted_job_id, seeeker_id, callback);
};

const updateAppliedJob = (posted_job_id, seeeker_id, new_data, callback) => {
  AppliedJobModel.updateAppliedJob(
    posted_job_id,
    seeeker_id,
    new_data,
    callback
  );
};

module.exports = {
  getAllAppliedJobs,
  getAppliedJob,
  saveAppliedJob,
  deleteAppliedJob,
  updateAppliedJob,
};
