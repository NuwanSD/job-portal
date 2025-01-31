const express = require("express");
const JobController = require("../controllers/job");

const router = express.Router();

router.get("/jobs", JobController.getJobs);
router.get("/jobs/:id", JobController.getJobById);
router.post("/jobs", JobController.saveJob);
router.delete("/jobs/:id", JobController.deleteJob);
router.patch("/jobs/:id", JobController.updateJob);

module.exports = router;
