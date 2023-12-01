const { Tasks } = require("../models/tasks.model");

//get all tasks by user

const getUserTasks = async (req, res) => {
  let { user } = req.query;
  try {
    if (user) {
      user = user.toLowerCase();
      const allTasks = await Tasks.find({ created_by: user });
      res.status(200).json(allTasks);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
};

//get specific task

const getOneTask = async (req, res) => {
  let { task } = req.params;

  task = task.toLowerCase();

  try {
    const yourTask = await Tasks.findOne({ task });
    if (yourTask) {
      res.status(200).json(yourTask);
    } else {
      res.status(204).json("This task hasn't been created yet");
    }
  } catch (error) {
    console.log(error);
  }
};

//Add new task

const addTask = async (req, res) => {
  let { task, created_by } = req.body;
  task = task.toLowerCase();
  created_by = created_by.toLowerCase();
  try {
    await Tasks.insertMany({ task: task, created_by: created_by });
    res.status(201).json(`${task} added successfully by ${created_by}`);
  } catch (error) {
    console.log(error);
  }
};

//delete tasks

const deleteTask = async (req, res) => {
  let { task } = req.params;
  task = task.toLowerCase();
  try {
    await Tasks.deleteOne({ task: task });
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

//update tasks

const updateTask = async (req, res) => {
  let { task } = req.params;

  let newTask = req.body.task;

  try {
    newTask = newTask.toLowerCase();

    await Tasks.updateOne(
      { task: task },
      {
        $set: {
          task: newTask,
        },
      }
    );
    res.status(200).json(`${task} Task updated to ${newTask} successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserTasks,
  getOneTask,
  addTask,
  deleteTask,
  updateTask,
};
