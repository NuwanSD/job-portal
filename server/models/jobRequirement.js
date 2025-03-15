//Requirements based on posted jobs

db = require("../config/dbConfig");

const JobRequirement = {
  getAll: (callback) => {
    const query = "SELECT * FROM job_requirement";
    db.query(query, callback);
  },

  getOne: (requirement_id, callback) => {
    const query = "SELECT * FROM job_requirement WHERE requirement_id = ?";
    db.query(query, [requirement_id], callback);
  },

  saveRecord: (data, callback) => {
    if (!Array.isArray(data)) {
      data = [data];
    }

    const values = data.map(({ posted_job_id, description }) => [
      posted_job_id,
      description,
    ]);

    const query =
      "INSERT INTO job_requirement ( posted_job_id, description) VALUES ?";

    db.query(query, [values], callback);
  },

  deleteRecord: (requirement_id, callback) => {
    const query = "DELETE FROM job_requirement WHERE requirement_id = ?";

    db.query(query, [requirement_id], callback);
  },

  updateRecord: (requirement_id, new_data, callback) => {
    const query =
      "UPDATE job_requirement SET posted_job_id = ?, description = ? WHERE requirement_id = ?";
    const { posted_job_id, description } = new_data;

    db.query(query, [posted_job_id, description, requirement_id], callback);
  },
};

module.exports = JobRequirement;
