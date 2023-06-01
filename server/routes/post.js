const express = require("express");
const getAllPostController = require("../controllers/getAllPostController");
const getAllPost = require("../controllers/getAllPostController");
const PostController = require("../controllers/PostController");
const GetPostById = require("../controllers/GetPostById");
const router = express.Router();

router.get("/", getAllPostController);
router.get("/:id", GetPostById);
router.post("/create-post", PostController);

module.exports = router;
