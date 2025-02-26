const db = require("../config/dbConfig");

const JobSeekerModel = {
  getAllUsers: (callback) => {
    const query = "SELECT * FROM user";
    db.query(query, callback);
  },

  getUserById: (user_id, callback) => {
    const query = "SELECT * FROM user WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  getUserByUsername: (username, callback) => {
    const query = "SELECT * FROM user WHERE username = ?";
    db.query(query, [username], callback);
  },

  saveUser: (user_data, callback) => {
    const query =
      "INSERT INTO user (user_id, username, name, email, phone, city, country, password, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const {
      user_id,
      username,
      name,
      email,
      phone,
      city,
      country,
      password,
      role,
    } = user_data;
    db.query(
      query,
      [user_id, username, name, email, phone, city, country, password, role],
      callback
    );
  },

  deleteUser: (user_id, callback) => {
    const query = "DELETE FROM user WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  updateUser: (user_id, new_data, callback) => {
    const query =
      "UPDATE user SET username = ? , name = ?, email = ?, phone = ?, city = ?, country = ?, password = ?, role = ? WHERE user_id = ?";
    const { username, name, email, phone, city, country, password, role } =
      new_data;
    db.query(
      query,
      [username, name, email, phone, city, country, password, role, user_id],
      callback
    );
  },
};

module.exports = JobSeekerModel;
