db = require("../config/dbConfig");

const JobRequirement = {
  getAll: (callback) => {
    const query = "SELECT * FROM job_tag";
    db.query(query, callback);
  },

  getOne: (tag_id, callback) => {
    const query = "SELECT * FROM job_tag WHERE tag_id = ?";
    db.query(query, [tag_id], callback);
  },

  saveRecord: (data, callback) => {
    const query = "INSERT INTO job_tag (tag_id, tag ) VALUES (?, ?)";
    const { tag_id, tag } = data;

    db.query(query, [tag_id, tag], callback);
  },

  deleteRecord: (tag_id, callback) => {
    const query = "DELETE FROM job_tag WHERE tag_id = ?";

    db.query(query, [tag_id], callback);
  },

  updateRecord: (tag_id, new_data, callback) => {
    const query = "UPDATE job_tag SET tag = ? WHERE tag_id = ?";
    const { tag } = new_data;

    db.query(query, [tag, tag_id], callback);
  },
};

module.exports = JobRequirement;
