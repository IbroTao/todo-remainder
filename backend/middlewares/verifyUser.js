const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyUser = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) {
    res.status(401).json("Add authorization token");
  } else {
    const token = authHeader.split(" ")[1];
    const accessToken = await jwt.verify(token, process.env.SECRET);
    req.user = accessToken;
    if (accessToken) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  }
};

module.exports = { verifyUser };
