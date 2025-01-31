const db = require("../config/dbConfig");

const JobSeekerModel = {
  getAll: (callback) => {
    const query = "SELECT * FROM job_seeker";
    db.query(query, callback);
  },

  getOne: (user_id, callback) => {
    const query = "SELECT * FROM job_seeker WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  saveRecord: (seeker_data, callback) => {
    const query =
      "INSERT INTO job_seeker (user_id, age, description, looking_for, photo_url) VALUES (?, ?, ?, ?, ?)";

    const { user_id, age, description, looking_for, photo_url } = seeker_data;
    db.query(
      query,
      [user_id, age, description, looking_for, photo_url],
      callback
    );
  },

  deleteRecord: (user_id, callback) => {
    const query = "DELETE FROM job_seeker WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  updateRecord: (user_id, new_data, callback) => {
    const query =
      "UPDATE job_seeker SET age = ?, description = ?, looking_for = ?, photo_url = ? WHERE user_id = ?";
    const { age, description, looking_for, photo_url } = new_data;
    db.query(
      query,
      [age, description, looking_for, photo_url, user_id],
      callback
    );
  },
};

module.exports = JobSeekerModel;
