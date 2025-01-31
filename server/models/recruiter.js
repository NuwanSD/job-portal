const db = require("../config/dbConfig");

const Recruiter = {
  getAll: (callback) => {
    const query = "SELECT * FROM recruiter";
    db.query(query, callback);
  },

  getOne: (user_id, callback) => {
    const query = "SELECT * FROM recruiter WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  saveRecord: (recruiter_data, callback) => {
    const query =
      "INSERT INTO recruiter (user_id, description, looking_for, photo_url) VALUES (?, ?, ?, ?)";
    const { user_id, description, looking_for, photo_url } = recruiter_data;

    db.query(query, [user_id, description, looking_for, photo_url], callback);
  },

  deleteRecord: (user_id, callback) => {
    const query = "DELETE FROM recruiter WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  updateRecord: (user_id, new_data, callback) => {
    const query =
      "UPDATE recruiter SET description = ?, looking_for = ?, photo_url = ? WHERE user_id = ?";
    const { description, looking_for, photo_url } = new_data;
    db.query(query, [description, looking_for, photo_url, user_id], callback);
  },
};

module.exports = Recruiter;
