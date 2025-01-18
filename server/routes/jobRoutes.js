const express = require("express");
const JobController = require("../controllers/jobController");

const router = express.Router();

router.get("/jobs", JobController.getJobs);
router.get("/jobs/:id", JobController.getJobById);
router.post("/jobs", JobController.saveJob);
router.delete("/jobs/:id", JobController.deleteJob);

module.exports = router;
