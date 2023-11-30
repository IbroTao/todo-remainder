const { verifyUser } = require("./verifyUser");

const verifyAdmin = async (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  });
};

module.exports = { verifyAdmin };
