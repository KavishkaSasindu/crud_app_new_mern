const express = require("express");
const postController = require("../controller/postsController");

const router = express.Router();

router.post("/api/createPost", postController.createPost);
router.get("/api/getAllPost", postController.getPosts);
router.get("/api/getOnePost/:id", postController.onePost);
router.put("/api/updatePost/:id", postController.updatePost);
router.delete("/api/deletePost/:id", postController.deletePost);

module.exports = router;
