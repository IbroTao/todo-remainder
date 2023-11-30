const { Router } = require("express");

const {
  getUserTasks,
  getOneTask,
  addTask,
  deleteTask,
  updateTask,
} = require("../src/controllers/todos.controller");

const router = Router();

router.get("", getUserTasks);
router.get("/:task", getOneTask);
router.post("", addTask);
router.delete("/:task", deleteTask);
router.put("/:task", updateTask);

module.exports = router;
