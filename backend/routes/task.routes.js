const { Router } = require("express");
const { restrictUser } = require("../middlewares/restrictUser");
const { verifyAdmin } = require("../middlewares/verifyAdmin");
const { verifyUser } = require("../middlewares/verifyUser");

const {
  getUserTasks,
  getOneTask,
  addTask,
  deleteTask,
  updateTask,
} = require("../src/controllers/todos.controller");

const router = Router();

router.get("/all", verifyAdmin, getUserTasks);
router.get("/:task", verifyUser, verifyAdmin, getOneTask);
router.post("/add", verifyUser, restrictUser, addTask);
router.delete("/:task", verifyUser, restrictUser, deleteTask);
router.put("/:task", verifyUser, restrictUser, updateTask);

module.exports = router;
