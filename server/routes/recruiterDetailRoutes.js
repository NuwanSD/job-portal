const express = require("express");

const RecruiterDetialController = require("../controllers/recruiterDetailsController");

const router = express.Router();

router.get("/recruiter-details", RecruiterDetialController.getAllRecord);
router.get("/recruiter-details/:id", RecruiterDetialController.getDetailById);
router.post("/recruiter-details", RecruiterDetialController.saveRecord);
router.delete("/recruiter-details/:id", RecruiterDetialController.deleteRecord);
router.patch("/recruiter-details/:id", RecruiterDetialController.updateRecord);

module.exports = router;
