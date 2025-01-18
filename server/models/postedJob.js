const db = require("../config/dbConfig");

const PostedJob = {
  getAllPostedJobs: (callback) => {
    const query = "SELECT * FROM posted_job";
    db.query(query, callback);
  },

  getPostedJob: (recruiter_id, job_id, callback) => {
    const query =
      "SELECT * FROM posted_job WHERE recruiter_id = ? AND job_id = ?";
    db.query(query, [recruiter_id, job_id], callback);
  },

  savePostedJob: (job_data, callback) => {
    const query =
      "INSERT INTO posted_job (posted_job_id, recruiter_id, job_id, posted_date, status) VALUES (?, ?, ?, ?, ?)";
    const { posted_job_id, recruiter_id, job_id, posted_date, status } =
      job_data;

    db.query(
      query,
      [posted_job_id, recruiter_id, job_id, posted_date, status],
      callback
    );
  },

  deletePostedJob: (recruiter_id, job_id, callback) => {
    const query =
      "DELETE FROM posted_job WHERE recruiter_id = ? AND job_id = ?";
    db.query(query, [recruiter_id, job_id], callback);
  },

  updatePostedJob: (recruiter_id, job_id, newJobData, callback) => {
    const query =
      "UPDATE posted_job SET posted_date = ?, status = ? WHERE recruiter_id = ? AND job_id = ?";
    const { posted_date, status } = newJobData;

    db.query(query, [posted_date, status, recruiter_id, job_id], callback);
  },
};

module.exports = PostedJob;
