db = require("../config/dbConfig");

const JobBenefit = {
  getAll: (callback) => {
    const query = "SELECT * FROM job_benefit";
    db.query(query, callback);
  },

  getOne: (benefit_id, callback) => {
    const query = "SELECT * FROM job_benefit WHERE benefit_id = ?";
    db.query(query, [benefit_id], callback);
  },

  saveRecord: (data, callback) => {
    const query =
      "INSERT INTO job_benefit (benefit_id, posted_job_id, description, benefit_tag) VALUES (?, ?, ?, ?)";
    const { benefit_id, posted_job_id, description, benefit_tag } = data;

    db.query(
      query,
      [benefit_id, posted_job_id, description, benefit_tag],
      callback
    );
  },

  deleteRecord: (benefit_id, callback) => {
    const query = "DELETE FROM job_benefit WHERE benefit_id = ?";

    db.query(query, benefit_id, callback);
  },

  updateRecord: (benefit_id, new_data, callback) => {
    const query =
      "UPDATE job_benefit SET posted_job_id = ? , description = ?, benefit_tag = ? WHERE benefit_id = ?";
    const { posted_job_id, description, benefit_tag } = new_data;

    db.query(
      query,
      [posted_job_id, description, benefit_tag, benefit_id],
      callback
    );
  },
};

module.exports = JobBenefit;
