const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { MONGO } = require("./configs/database");
const authRouter = require("./routes/user.routes");
const todoRouter = require("./routes/task.router");

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/tasks", todoRouter);

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
