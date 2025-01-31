const express = require("express");

const JobSeekerDetailsController = require("../controllers/jobSeekerDetailsController");

const router = express.Router();

router.get("/details", JobSeekerDetailsController.getAllRecord);
router.get("/details/:id", JobSeekerDetailsController.getRecordBySeekerId);
router.post("/details", JobSeekerDetailsController.saveRecord);
router.delete("/details/:id", JobSeekerDetailsController.deleteRecord);
router.patch("/details/:id", JobSeekerDetailsController.updateRecord);

module.exports = router;
