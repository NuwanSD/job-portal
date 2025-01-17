const RecruiterModel = require("../models/recruiter");

const getAllRecruiters = (callback) => {
  RecruiterModel.getAllRecruiters(callback);
};

const getRecruiterById = (recruiter_id, callback) => {
  RecruiterModel.getRecruiter(recruiter_id, callback);
};

const saveRecruiter = (recruiter_data, callback) => {
  RecruiterModel.saveRecruiter(recruiter_data, callback);
};

const deleteRecruiter = (recruiter_id, callback) => {
  RecruiterModel.deleteRecruiter(recruiter_id, callback);
};

module.exports = {
  getAllRecruiters,
  getRecruiterById,
  saveRecruiter,
  deleteRecruiter,
};
