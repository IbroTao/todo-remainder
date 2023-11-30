const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/user.routes");
const { MONGO } = require("./configs/database");
require("dotenv").config();

const todoRouter = require("./routes/todos");

const app = express();

<<<<<<< HEAD

app.use("/todos", todoRouter);
=======
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));
>>>>>>> 1724f93a175b82d29a9b673b8d5642324f17a245

app.use(cors());
app.use("/api/auth", authRouter);

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
