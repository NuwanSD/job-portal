const RequirementModel = require("../models/jobRequirement");

const RequirementController = {
  getAll: (req, res) => {
    RequirementModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getOne: (req, res) => {
    const requirement_id = req.params.rid;

    RequirementModel.getOne(requirement_id, (err, result) => {
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
    const { requirement_id, posted_job_id, description } = req.body;

    if (
      requirement_id === undefined ||
      posted_job_id === undefined ||
      description === undefined
    ) {
      return res.status(400).send("All fields are required");
    }

    const newData = {
      requirement_id,
      posted_job_id,
      description,
    };

    RequirementModel.saveRecord(newData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send(result);
    });
  },

  deleteRecord: (req, res) => {
    const requirement_id = req.params.rid;

    RequirementModel.deleteRecord(requirement_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const requirement_id = req.params.rid;
    const updatedData = req.body;

    RequirementModel.updateRecord(
      requirement_id,
      updatedData,
      (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        return res.status(200).send(result);
      }
    );
  },
};

module.exports = RequirementController;
