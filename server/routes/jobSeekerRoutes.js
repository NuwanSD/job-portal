const express = require("express");
const JobSeekerController = require("../controllers/jobSeekerController");

const router = express.Router();

router.get("/seekers", JobSeekerController.getSeekers);
router.get("/seekers/:id", JobSeekerController.getSeekerById);
router.post("/seekers", JobSeekerController.saveJobSeeker);
router.delete("/seekers/:id", JobSeekerController.deleteJobSeeker);

module.exports = router;
