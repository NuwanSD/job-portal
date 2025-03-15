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
    const payload = req.body;

    let values = [];
    if (Array.isArray(payload)) {
      values = payload.map((item) => ({
        posted_job_id: item.posted_job_id,
        description: item.description,
        benefit_tag: item.benefit_tag,
      }));
    } else {
      values.push({
        posted_job_id: item.posted_job_id,
        description: item.description,
        benefit_tag: item.benefit_tag,
      });
    }

    if (values.length === 0) {
      return res.status(400).send("Invalid request payload");
    }

    JobBenefitModel.saveRecord(values, (err, result) => {
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
