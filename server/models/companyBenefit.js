db = require("../config/dbConfig");

const CompanyBenefit = {
  getAll: (callback) => {
    const query = "SELECT * FROM company_benefit";
    db.query(query, callback);
  },

  getOne: (benefit_id, callback) => {
    const query = "SELECT * FROM company_benefit WHERE benefit_id = ?";
    db.query(query, [benefit_id], callback);
  },

  saveRecord: (data, callback) => {
    const query =
      "INSERT INTO company_benefit (benefit_id, user_id, description) VALUES (?, ?, ?)";
    const { benefit_id, user_id, description } = data;

    db.query(query, [benefit_id, user_id, description], callback);
  },

  deleteRecord: (benefit_id, callback) => {
    const query = "DELETE FROM company_benefit WHERE benefit_id = ?";

    db.query(query, [benefit_id], callback);
  },

  updateRecord: (benefit_id, new_data, callback) => {
    const query =
      "UPDATE company_benefit SET user_id = ?, description = ? WHERE benefit_id = ?";
    const { user_id, description } = new_data;

    db.query(query, [user_id, description, benefit_id], callback);
  },
};

module.exports = CompanyBenefit;
