const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
});

const Tasks = mongoose.model("tasks", taskSchema);
module.exports = { Tasks };
