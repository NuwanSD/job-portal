const CompanyBenefitModel = require("../models/companyBenefit");

const CompanyBenefitController = {
  getAll: (req, res) => {
    CompanyBenefitModel.getAll((err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.json(result);
    });
  },

  getOne: (req, res) => {
    const benefit_id = req.params.bid;

    CompanyBenefitModel.getOne(benefit_id, (err, result) => {
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
    const { benefit_id, user_id, description } = req.body;

    if (
      benefit_id === undefined ||
      user_id === undefined ||
      description === undefined
    ) {
      return res.status(400).send("All fields are required");
    }

    const newData = {
      benefit_id,
      user_id,
      description,
    };

    CompanyBenefitModel.saveRecord(newData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(201).send(result);
    });
  },

  deleteRecord: (req, res) => {
    const benefit_id = req.params.bid;

    CompanyBenefitModel.deleteRecord(benefit_id, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(204).send();
    });
  },

  updateRecord: (req, res) => {
    const benefit_id = req.params.bid;
    const updatedData = req.body;

    CompanyBenefitModel.updateRecord(benefit_id, updatedData, (err, result) => {
      if (err) {
        return res.status(500).send("Internal Server Error");
      }
      return res.status(200).send(result);
    });
  },
};

module.exports = CompanyBenefitController;
