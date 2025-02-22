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
      "INSERT INTO recruiter (user_id, description, vision, website, founded, organization_type, industry_type, team_size, logo_url, cover_photo, facebook_url, x_url, instagram_url, linkedin_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const {
      user_id,
      description,
      vision,
      website,
      founded,
      organization_type,
      industry_type,
      team_size,
      logo_url,
      cover_photo,
      facebook_url,
      x_url,
      instagram_url,
      linkedin_url,
    } = recruiter_data;

    db.query(
      query,
      [
        user_id,
        description,
        vision,
        website,
        founded,
        organization_type,
        industry_type,
        team_size,
        logo_url,
        cover_photo,
        facebook_url,
        x_url,
        instagram_url,
        linkedin_url,
      ],
      callback
    );
  },

  deleteRecord: (user_id, callback) => {
    const query = "DELETE FROM recruiter WHERE user_id = ?";
    db.query(query, [user_id], callback);
  },

  updateRecord: (user_id, new_data, callback) => {
    const query =
      "UPDATE recruiter SET description = ?, vision = ?, website = ?, founded = ?, organization_type = ?, industry_type = ?, team_size = ?, logo_url = ?, cover_photo = ?, facebook_url = ?, x_url = ?, instagram_url = ?, linkedin_url = ? WHERE user_id = ?";
    const {
      description,
      vision,
      website,
      founded,
      organization_type,
      industry_type,
      team_size,
      logo_url,
      cover_photo,
      facebook_url,
      x_url,
      instagram_url,
      linkedin_url,
    } = new_data;

    db.query(
      query,
      [
        description,
        vision,
        website,
        founded,
        organization_type,
        industry_type,
        team_size,
        logo_url,
        cover_photo,
        facebook_url,
        x_url,
        instagram_url,
        linkedin_url,
        user_id,
      ],
      callback
    );
  },
};

module.exports = Recruiter;
