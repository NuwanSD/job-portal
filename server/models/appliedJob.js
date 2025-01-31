db = require("../config/dbConfig");

const AppliedJob = {
  getAllAppliedJobs: (callback) => {
    const query = "SELECT * FROM applied_job";
    db.query(query, callback);
  },

  getAppliedJob: (posted_job_id, user_id, callback) => {
    const query =
      "SELECT * FROM applied_job WHERE posted_job_id = ? AND user_id = ?";
    db.query(query, [posted_job_id, user_id], callback);
  },

  saveAppliedJob: (new_data, callback) => {
    const query =
      "INSERT INTO applied_job (posted_job_id, user_id, applied_date) VALUES (?, ?, ?)";
    const { posted_job_id, user_id, applied_date } = new_data;

    db.query(query, [posted_job_id, user_id, applied_date], callback);
  },

  deleteAppliedJob: (posted_job_id, user_id, callback) => {
    const query =
      "DELETE FROM applied_job WHERE posted_job_id = ? AND user_id = ?";

    db.query(query, [posted_job_id, user_id], callback);
  },

  updateAppliedJob: (posted_job_id, user_id, new_data, callback) => {
    const query =
      "UPDATE applied_job SET applied_date = ? WHERE posted_job_id = ? AND user_id = ?";
    const { applied_date } = new_data;

    db.query(query, [applied_date, posted_job_id, user_id], callback);
  },
};

module.exports = AppliedJob;
