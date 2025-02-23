const express = require("express");
const JobTagContoller = require("../controllers/jobTag");

const router = express.Router();

router.get("/job_tag", JobTagContoller.getAll);
router.get("/job_tag/:id", JobTagContoller.getOne);
router.post("/job_tag", JobTagContoller.saveRecord);
router.delete("/job_tag/:id", JobTagContoller.deleteRecord);
router.patch("/job_tag/:id", JobTagContoller.updateRecord);

module.exports = router;
