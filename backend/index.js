const express = require("express");
const cors = require("cors");

const todoRouter = require("./routes/todos");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/todos", todoRouter);

app.listen("3001", () => {
  console.log("server running at port 3001");
});
