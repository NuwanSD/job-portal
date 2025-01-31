const express = require("express");

const RecruiterController = require("../controllers/recruiter");

const router = express.Router();

router.get("/recruiter", RecruiterController.getAllRecord);
router.get("/recruiter/:id", RecruiterController.getDetailById);
router.post("/recruiter", RecruiterController.saveRecord);
router.delete("/recruiter/:id", RecruiterController.deleteRecord);
router.patch("/recruiter/:id", RecruiterController.updateRecord);

module.exports = router;
