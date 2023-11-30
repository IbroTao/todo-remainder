const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
});

const Items = mongoose.model("items", itemSchema);
module.exports = { Items };
