const express = require("express");
const PostedJobController = require("../controllers/postedJobController");

const router = express.Router();

router.get("/posted_job", PostedJobController.getPostedJobs);
router.get("/posted_job/:rid/:jid", PostedJobController.getPostedJobById);
router.post("/posted_job", PostedJobController.savePostedJob);
router.delete("/posted_job/:rid/:jid", PostedJobController.deletePostedJob);
router.patch("/posted_job/:rid/:jid", PostedJobController.updatePostedJob);

module.exports = router;
