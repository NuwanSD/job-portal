const db = require("../config/dbConfig");

const PostedJob = {
  getAllPostedJobs: (callback) => {
    const query = "SELECT * FROM posted_job";
    db.query(query, callback);
  },

  getPostedJob: (posted_job_id, callback) => {
    const query = "SELECT * FROM posted_job WHERE posted_job_id = ?";
    db.query(query, [posted_job_id], callback);
  },

  savePostedJob: (job_data, callback) => {
    const query =
      "INSERT INTO posted_job (posted_job_id, user_id, job_id, salary, posted_date, expire_date, job_type, job_location, description, job_level, experience, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const {
      posted_job_id,
      user_id,
      job_id,
      salary,
      posted_date,
      expire_date,
      job_type,
      job_location,
      description,
      job_level,
      experience,
      status,
    } = job_data;

    db.query(
      query,
      [
        posted_job_id,
        user_id,
        job_id,
        salary,
        posted_date,
        expire_date,
        job_type,
        job_location,
        description,
        job_level,
        experience,
        status,
      ],
      callback
    );
  },

  deletePostedJob: (posted_job_id, callback) => {
    const query = "DELETE FROM posted_job WHERE posted_job_id = ?";
    db.query(query, [posted_job_id], callback);
  },

  updatePostedJob: (posted_job_id, newJobData, callback) => {
    const query =
      "UPDATE posted_job SET user_id = ?, job_id = ?, salary = ?, posted_date = ?, expire_date = ?, job_type = ?, job_location = ?, description = ?, job_level = ?, experience = ?, status = ? WHERE posted_job_id = ?";
    const {
      user_id,
      job_id,
      salary,
      posted_date,
      expire_date,
      job_type,
      job_location,
      description,
      job_level,
      experience,
      status,
    } = newJobData;

    db.query(
      query,
      [
        user_id,
        job_id,
        salary,
        posted_date,
        expire_date,
        job_type,
        job_location,
        description,
        job_level,
        experience,
        status,
        posted_job_id,
      ],
      callback
    );
  },
};

module.exports = PostedJob;
