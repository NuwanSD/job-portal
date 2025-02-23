const express = require("express");

const PostedJobController = require("../controllers/postedJob");

const router = express.Router();

router.get("/posted_job", PostedJobController.getPostedJobs);
router.get("/posted_job/:pid", PostedJobController.getPostedJobById);
router.post("/posted_job", PostedJobController.savePostedJob);
router.delete("/posted_job/:pid", PostedJobController.deletePostedJob);
router.patch("/posted_job/:pid", PostedJobController.updatePostedJob);

module.exports = router;
