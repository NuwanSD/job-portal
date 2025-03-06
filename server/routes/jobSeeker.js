const express = require("express");

const JobSeekerController = require("../controllers/jobSeeker");

const router = express.Router();

router.get("/job_seeker", JobSeekerController.getAllRecord);
router.get("/job_seeker/:id", JobSeekerController.getRecordBySeekerId);
router.post("/job_seeker", JobSeekerController.saveRecord);
router.delete("/job_seeker/:id", JobSeekerController.deleteRecord);
router.put("/job_seeker/:id", JobSeekerController.updateRecord);

module.exports = router;
