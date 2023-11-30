const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/user.routes");
const { MONGO } = require("./configs/database");
require("dotenv").config();

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

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
