const express = require("express");
const postController = require("../controller/postsController");

const router = express.Router();

router.post("/api/createPost", postController.createPost);
router.get("/api/getAllPost", postController.getPosts);
router.get("/api/getOnePost/:id", postController.onePost);

module.exports = router;
