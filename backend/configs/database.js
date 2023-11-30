const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGO_URL;
const MONGO = mongoose.connect(mongoURL);
module.exports = { MONGO };
