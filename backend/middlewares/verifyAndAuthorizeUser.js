const { verifyUser } = require("./verifyUser");

const verifyAndAuthorizeUser = async (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.params.id === req.user.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized");
    }
  });
};

module.exports = { verifyAndAuthorizeUser };
