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
    const payload = req.body;

    let values = [];
    if (Array.isArray(payload)) {
      values = payload.map((tag) => ({
        tag_id: tag.tag_id,
        posted_job_id: tag.posted_job_id,
      }));
    } else {
      values.push({
        tag_id: payload.tag_id,
        posted_job_id: payload.posted_job_id,
      });
    }

    if (values.length === 0) {
      return res.status(400).send("Invalid request payload");
    }

    TagModel.saveRecord(values, (err, result) => {
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
