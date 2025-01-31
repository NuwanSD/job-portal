const express = require("express");

const JobSeekerDetailsController = require("../controllers/jobSeekerDetailsController");

const router = express.Router();

router.get("/seeker-details", JobSeekerDetailsController.getAllRecord);
router.get(
  "/seeker-details/:id",
  JobSeekerDetailsController.getRecordBySeekerId
);
router.post("/seeker-details", JobSeekerDetailsController.saveRecord);
router.delete("/seeker-details/:id", JobSeekerDetailsController.deleteRecord);
router.patch("/seeker-details/:id", JobSeekerDetailsController.updateRecord);

module.exports = router;
