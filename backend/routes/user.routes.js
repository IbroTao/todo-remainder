const { Router } = require("express");
const { signupUser, loginUser } = require("../src/controllers/auth.controller");
const router = Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
