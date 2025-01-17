const express = require("express");
const RecruiterController = require("../controllers/recruiterController");

const router = express.Router();

router.get("/recruiters", RecruiterController.getRecruiters);
router.get("/recruiters/:id", RecruiterController.getRecruiterById);
router.post("/recruiters", RecruiterController.saveRecruiter);
router.delete("/recruiters/:id", RecruiterController.deleteRecruiter);

module.exports = router;
