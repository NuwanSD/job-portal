const express = require("express");
const CompanyBenefitController = require("../controllers/companyBenefit");

const router = express.Router();

router.get("/company_benefit", CompanyBenefitController.getAll);
router.get("/company_benefit/:bid", CompanyBenefitController.getOne);
router.post("/company_benefit", CompanyBenefitController.saveRecord);
router.delete("/company_benefit/:bid", CompanyBenefitController.deleteRecord);
router.patch("/company_benefit/:bid", CompanyBenefitController.updateRecord);

module.exports = router;
