const express = require("express");
const cors = require("cors");
const { MONGO } = require("./configs/database");
require("dotenv").config();

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

MONGO.then((result) => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.log(err);
});

const runServer = (port) => {
  app.listen(port);
  console.log(`App is running on PORT ${port}`);
};
runServer(port);
