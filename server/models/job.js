const db = require("../config/dbConfig");

const Job = {
  getAllJobs: (callback) => {
    const query = "SELECT * FROM job";
    db.query(query, callback);
  },

  getJob: (job_id, callback) => {
    const query = "SELECT * FROM job WHERE job_id = ?";
    db.query(query, [job_id], callback);
  },

  saveJob: (job_data, callback) => {
    const query =
      "INSERT INTO job (job_id, title, description) VALUES (?, ?, ?)";
    const { job_id, title, description } = job_data;

    db.query(query, [job_id, title, description], callback);
  },

  deleteJob: (job_id, callback) => {
    const query = "DELETE FROM job WHERE job_id = ?";
    db.query(query, [job_id], callback);
  },
};

module.exports = Job;
