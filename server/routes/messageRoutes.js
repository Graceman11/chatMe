const express = require("express");
const sendMessageController = require("../controllers/SendMessageController");
const allMessageController = require("../controllers/AllMessageController");
const router = express.Router();

// router.get("/", getAllPostController);
// router.get("/:id", GetPostById);
router.post("/send-message/:receiverId", sendMessageController);
router.get("/", allMessageController);

module.exports = router;
