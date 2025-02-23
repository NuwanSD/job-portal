const TagModel = require("../models/jobTag");

const TagController = {
  getAll: (req, res) => {
    TagModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getOne: (req, res) => {
    const tag_id = req.params.id;

    TagModel.getOne(tag_id, (err, result) => {
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
    const { tag_id, tag } = req.body;

    if (tag_id === undefined || tag === undefined) {
      return res.status(400).send("All fields are required");
    }

    const newData = {
      tag_id,
      tag,
    };

    TagModel.saveRecord(newData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send(result);
    });
  },

  deleteRecord: (req, res) => {
    const tag_id = req.params.id;

    TagModel.deleteRecord(tag_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const tag_id = req.params.id;

    const updatedData = req.body;

    TagModel.updateRecord(tag_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(200).send(result);
    });
  },
};

module.exports = TagController;
