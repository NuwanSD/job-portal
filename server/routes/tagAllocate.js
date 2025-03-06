const express = require("express");

const TagAllocateController = require("../controllers/tagAllocate");

const router = express.Router();

router.get("/tag_allocate", TagAllocateController.getAll);
router.get("/tag_allocate/:tid/:pid", TagAllocateController.getOne);
router.post("/tag_allocate", TagAllocateController.saveRecord);
router.delete("/tag_allocate/:tid/:pid", TagAllocateController.deleteRecord);
router.put("/tag_allocate/:tid/:pid", TagAllocateController.updateRecord);

module.exports = router;
