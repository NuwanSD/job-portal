const db = require("../config/dbConfig");

const PostedJob = {
  getAllPostedJobs: (callback) => {
    const query = "SELECT * FROM posted_job";
    db.query(query, callback);
  },

  getPostedJob: (user_id, job_id, callback) => {
    const query = "SELECT * FROM posted_job WHERE user_id = ? AND job_id = ?";
    db.query(query, [user_id, job_id], callback);
  },

  savePostedJob: (job_data, callback) => {
    const query =
      "INSERT INTO posted_job (posted_job_id, user_id, job_id, posted_date, status) VALUES (?, ?, ?, ?, ?)";
    const { posted_job_id, user_id, job_id, posted_date, status } = job_data;

    db.query(
      query,
      [posted_job_id, user_id, job_id, posted_date, status],
      callback
    );
  },

  deletePostedJob: (user_id, job_id, callback) => {
    const query = "DELETE FROM posted_job WHERE user_id = ? AND job_id = ?";
    db.query(query, [user_id, job_id], callback);
  },

  updatePostedJob: (user_id, job_id, newJobData, callback) => {
    const query =
      "UPDATE posted_job SET posted_date = ?, status = ? WHERE user_id = ? AND job_id = ?";
    const { posted_date, status } = newJobData;

    db.query(query, [posted_date, status, user_id, job_id], callback);
  },
};

module.exports = PostedJob;
