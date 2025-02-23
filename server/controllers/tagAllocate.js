const TagModel = require("../models/tagAllocate");

const TagAllocateController = {
  getAll: (req, res) => {
    TagModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getOne: (req, res) => {
    const tag_id = req.params.tid;
    const posted_job_id = req.params.pid;

    TagModel.getOne(tag_id, posted_job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      if (result.length === 0) {
        return res.status(404).send("The requested data was not found");
      }

      return res.json(result);
    });
  },

  saveRecord: (req, res) => {
    const { tag_id, posted_job_id } = req.body;

    if (tag_id === undefined || posted_job_id === undefined) {
      return res.status(400).send("All fields are required");
    }

    const newData = {
      tag_id,
      posted_job_id,
    };

    TagModel.saveRecord(newData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send(result);
    });
  },

  deleteRecord: (req, res) => {
    const tag_id = req.params.tid;
    const posted_job_id = req.params.pid;

    TagModel.deleteRecord(tag_id, posted_job_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const tag_id = req.params.tid;
    const posted_job_id = req.params.pid;

    const updatedData = req.body;

    TagModel.updateRecord(tag_id, posted_job_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(200).send(result);
    });
  },
};

module.exports = TagAllocateController;
