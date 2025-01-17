const db = require("../config/dbConfig");

const Recruiter = {
  getAllRecruiters: (callback) => {
    const query = "SELECT * FROM recruiter";
    db.query(query, callback);
  },

  getRecruiter: (recruiter_id, callback) => {
    const query = "SELECT * FROM recruiter WHERE recruiter_id = ?";
    db.query(query, [recruiter_id], callback);
  },

  saveRecruiter: (recruiter_data, callback) => {
    const query =
      "INSERT INTO recruiter (recruiter_id, name, email, phone, address, description) VALUES (?, ?, ?, ?, ?, ?)";
    const { recruiter_id, name, email, phone, address, description } =
      recruiter_data;

    db.query(
      query,
      [recruiter_id, name, email, phone, address, description],
      callback
    );
  },

  deleteRecruiter: (recruiter_id, callback) => {
    const query = "DELETE FROM recruiter WHERE recruiter_id = ?";
    db.query(query, [recruiter_id], callback);
  },
};

module.exports = Recruiter;
