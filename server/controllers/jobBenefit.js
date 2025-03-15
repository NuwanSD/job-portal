const JobBenefitModel = require("../models/jobBenefit");

const JobBenefitController = {
  getAll: (req, res) => {
    JobBenefitModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getOne: (req, res) => {
    const benefit_id = req.params.bid;

    JobBenefitModel.getOne(benefit_id, (err, result) => {
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
    const { posted_job_id, description, benefit_tag } = req.body;

    if (
      posted_job_id === undefined ||
      description === undefined ||
      benefit_tag === undefined
    ) {
      return res.status(400).send("All field are required");
    }

    const newData = {
      posted_job_id,
      description,
      benefit_tag,
    };

    JobBenefitModel.saveRecord(newData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }

      return res.status(201).send(result);
    });
  },

  deleteRecord: (req, res) => {
    const benefit_id = req.params.bid;

    JobBenefitModel.deleteRecord(benefit_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send(result);
    });
  },

  updateRecord: (req, res) => {
    const benefit_id = req.params.bid;
    const updatedData = req.body;

    JobBenefitModel.updateRecord(benefit_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(200).send(result);
    });
  },
};

module.exports = JobBenefitController;
