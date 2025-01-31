const express = require("express");

const PostedJobController = require("../controllers/postedJob");

const router = express.Router();

router.get("/posted_job", PostedJobController.getPostedJobs);
router.get("/posted_job/:uid/:jid", PostedJobController.getPostedJobById);
router.post("/posted_job", PostedJobController.savePostedJob);
router.delete("/posted_job/:uid/:jid", PostedJobController.deletePostedJob);
router.patch("/posted_job/:uid/:jid", PostedJobController.updatePostedJob);

module.exports = router;
