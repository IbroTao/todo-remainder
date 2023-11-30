const { Router } = require("express");
const {
  signupUser,
  loginUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUserEmail,
  updateUserPassword,
} = require("../src/controllers/auth.controller");
const { verifyUser } = require("../middlewares/verifyUser");
const { verifyAdmin } = require("../middlewares/verifyAdmin");
const {
  verifyAndAuthorizeUser,
} = require("../middlewares/verifyAndAuthorizeUser");
const router = Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/all", verifyAdmin, getAllUsers);
router.get("/:id", verifyUser, getUser);
router.put("/email/:id", verifyAndAuthorizeUser, updateUserEmail);
router.put("/password/:id", verifyAndAuthorizeUser, updateUserPassword);
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
