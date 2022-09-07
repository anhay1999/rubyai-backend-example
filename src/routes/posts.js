const express = require("express");
const router = express.Router();
const postController = require("../app/controllers/PostController");

router.get("/create", postController.create);
router.post("/store", postController.store);
router.put("/:id", postController.update);
router.patch("/:id/restore", postController.restore);
router.delete("/:id", postController.delete);
router.delete("/:id/force", postController.forceDelete);
router.get("/:id/edit", postController.edit);
router.get("/:slug", postController.show);
module.exports = router;
