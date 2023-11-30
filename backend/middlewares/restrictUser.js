const { verifyUser } = require("./verifyUser");

const restrictUser = async (req, res, next) => {
  verifyUser(req, res, () => {
    if (!req.user.restrictUser) {
      next();
    } else {
      res.status(403).json("YOu are restricted");
    }
  });
};

module.exports = { restrictUser };
