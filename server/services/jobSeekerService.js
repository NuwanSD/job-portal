const JobSeekerModel = require("../models/jobSeeker");

const getAllJobSeekers = (callback) => {
  JobSeekerModel.getAllSeekers(callback);
};

const getJobSeekerById = (seeker_id, callback) => {
  JobSeekerModel.getSeeker(seeker_id, callback);
};

const saveJobSeeker = (newSeeker, callback) => {
  JobSeekerModel.saveSeeker(newSeeker, callback);
};

const deleteJobSeeker = (seeker_id, callback) => {
  JobSeekerModel.deleteSeeker(seeker_id, callback);
};

module.exports = {
  getAllJobSeekers,
  getJobSeekerById,
  saveJobSeeker,
  deleteJobSeeker,
};
