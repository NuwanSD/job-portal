const express = require("express");
const AppliedJobController = require("../controllers/appliedJob");

const router = express.Router();

router.get("/applied_job", AppliedJobController.getAppliedJobs);
router.get("/applied_job/:pid/:uid", AppliedJobController.getAppliedJobById);
router.post("/applied_job", AppliedJobController.saveAppliedJob);
router.delete("/applied_job/:pid/:uid", AppliedJobController.deleteAppliedJob);
router.put("/applied_job/:pid/:uid", AppliedJobController.updateAppliedJob);

module.exports = router;
