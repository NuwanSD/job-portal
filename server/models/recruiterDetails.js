const db = require("../config/dbConfig");

const Recruiter = {
  getAll: (callback) => {
    const query = "SELECT * FROM recruiter_details";
    db.query(query, callback);
  },

  getOne: (recruiter_id, callback) => {
    const query = "SELECT * FROM recruiter_details WHERE recruiter_id = ?";
    db.query(query, [recruiter_id], callback);
  },

  saveRecord: (recruiter_data, callback) => {
    const query =
      "INSERT INTO recruiter_details (recruiter_id, description, looking_for, photo_url) VALUES (?, ?, ?, ?)";
    const { recruiter_id, description, looking_for, photo_url } =
      recruiter_data;

    db.query(
      query,
      [recruiter_id, description, looking_for, photo_url],
      callback
    );
  },

  deleteRecord: (recruiter_id, callback) => {
    const query = "DELETE FROM recruiter_details WHERE recruiter_id = ?";
    db.query(query, [recruiter_id], callback);
  },

  updateRecord: (recruiter_id, new_data, callback) => {
    const query =
      "UPDATE recruiter_details SET description = ?, looking_for = ?, photo_url = ? WHERE recruiter_id = ?";
    const { description, looking_for, photo_url } = new_data;
    db.query(
      query,
      [description, looking_for, photo_url, recruiter_id],
      callback
    );
  },
};

module.exports = Recruiter;
