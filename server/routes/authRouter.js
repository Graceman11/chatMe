const express = require("express");
const LoginController = require("../controllers/loginController");
const SignUpController = require("../controllers/SignUpControllers");
const GetUserProfileController = require("../controllers/getUserProfile");

const router = express.Router();

router.post("/login", LoginController);
router.post("/signup", SignUpController);
router.get("/user-profile", GetUserProfileController);

module.exports = router;
