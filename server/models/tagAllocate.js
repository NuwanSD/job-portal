db = require("../config/dbConfig");

const TagAllocate = {
  getAll: (callback) => {
    const query = "SELECT * FROM tag_allocate";
    db.query(query, callback);
  },

  getOne: (tag_id, posted_job_id, callback) => {
    const query =
      "SELECT * FROM tag_allocate WHERE tag_id = ? AND posted_job_id = ?";
    db.query(query, [tag_id, posted_job_id], callback);
  },

  // saveRecord: (data, callback) => {
  //   const query =
  //     "INSERT INTO tag_allocate (tag_id, posted_job_id ) VALUES (?, ?)";
  //   const { tag_id, posted_job_id } = data;

  //   db.query(query, [tag_id, posted_job_id], callback);
  // },

  saveRecord: (data, callback) => {
    if (!Array.isArray(data)) {
      data = [data];
    }

    const values = data.map(({ tag_id, posted_job_id }) => [
      tag_id,
      posted_job_id,
    ]);

    const query = "INSERT INTO tag_allocate (tag_id, posted_job_id) VALUES ?";

    db.query(query, [values], callback);
  },

  deleteRecord: (tag_id, posted_job_id, callback) => {
    const query =
      "DELETE FROM tag_allocate WHERE tag_id = ? AND posted_job_id = ?";

    db.query(query, [tag_id, posted_job_id], callback);
  },

  updateRecord: (tag_id, posted_job_id, new_data, callback) => {
    const query =
      "UPDATE tag_allocate SET posted_job_id = ? WHERE tag_id = ? AND posted_job_id = ?";
    const { new_posted_job_id } = new_data;

    db.query(query, [new_posted_job_id, tag_id, posted_job_id], callback);
  },
};

module.exports = TagAllocate;

//update function is not work
