const express = require("express");
const JobBenefitController = require("../controllers/jobBenefit");

const router = express.Router();

router.get("/job_benefit", JobBenefitController.getAll);
router.get("/job_benefit/:bid", JobBenefitController.getOne);
router.post("/job_benefit", JobBenefitController.saveRecord);
router.delete("/job_benefit/:bid", JobBenefitController.deleteRecord);
router.patch("/job_benefit/:bid", JobBenefitController.updateRecord);

module.exports = router;
