const express = require("express");
const RequirementController = require("../controllers/jobRequirement");

const router = express.Router();

router.get("/job_requirement", RequirementController.getAll);
router.get("/job_requirement/:rid", RequirementController.getOne);
router.post("/job_requirement", RequirementController.saveRecord);
router.delete("/job_requirement/:rid", RequirementController.deleteRecord);
router.patch("/job_requirement/:rid", RequirementController.updateRecord);

module.exports = router;
