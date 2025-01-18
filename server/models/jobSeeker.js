const db = require("../config/dbConfig");

const JobSeekerModel = {
  getAllSeekers: (callback) => {
    const query = "SELECT * FROM job_seeker";
    db.query(query, callback);
  },

  getSeeker: (seeker_id, callback) => {
    const query = "SELECT * FROM job_seeker WHERE seeker_id = ?";
    db.query(query, [seeker_id], callback);
  },

  saveSeeker: (seeker_data, callback) => {
    const query =
      "INSERT INTO job_seeker (seeker_id, name, email, phone, birth_date, address, city, country, bio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const {
      seeker_id,
      name,
      email,
      phone,
      birth_date,
      address,
      city,
      country,
      bio,
    } = seeker_data;
    db.query(
      query,
      [seeker_id, name, email, phone, birth_date, address, city, country, bio],
      callback
    );
  },

  deleteSeeker: (seeker_id, callback) => {
    const query = "DELETE FROM job_seeker WHERE seeker_id = ?";
    db.query(query, [seeker_id], callback);
  },

  updateSeeker: (seeker_id, new_data, callback) => {
    const query =
      "UPDATE job_seeker SET name = ?, email = ?, phone = ?, birth_date = ?, address = ?, city = ?, country = ?, bio = ? WHERE seeker_id = ?";
    const { name, email, phone, birth_date, address, city, country, bio } =
      new_data;
    db.query(
      query,
      [name, email, phone, birth_date, address, city, country, bio, seeker_id],
      callback
    );
  },
};

module.exports = JobSeekerModel;
