const db = require("../config/dbConfig");

const JobSeekerModel = {
  getAll: (callback) => {
    const query = "SELECT * FROM job_seeker_details";
    db.query(query, callback);
  },

  getOne: (seeker_id, callback) => {
    const query = "SELECT * FROM job_seeker_details WHERE seeker_id = ?";
    db.query(query, [seeker_id], callback);
  },

  saveRecord: (seeker_data, callback) => {
    const query =
      "INSERT INTO job_seeker_details (seeker_id, age, description, looking_for, photo_url) VALUES (?, ?, ?, ?, ?)";

    const { seeker_id, age, description, looking_for, photo_url } = seeker_data;
    db.query(
      query,
      [seeker_id, age, description, looking_for, photo_url],
      callback
    );
  },

  deleteRecord: (seeker_id, callback) => {
    const query = "DELETE FROM job_seeker_details WHERE seeker_id = ?";
    db.query(query, [seeker_id], callback);
  },

  updateRecord: (seeker_id, new_data, callback) => {
    const query =
      "UPDATE job_seeker_details SET age = ?, description = ?, looking_for = ?, photo_url = ? WHERE seeker_id = ?";
    const { age, description, looking_for, photo_url } = new_data;
    db.query(
      query,
      [age, description, looking_for, photo_url, seeker_id],
      callback
    );
  },
};

module.exports = JobSeekerModel;
