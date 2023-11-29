const { User } = require("../models/user.model");
const { hashSync, compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const findUser = await User.findOne({ email });
    if (findUser) res.status(400).json("Email already used");
    await User.create({
      username,
      email,
      password: hashSync(password, 10),
    });
    res.status(200).json("User signed up successfully");
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(404).json("User not found");

    const comparePassword = await compareSync(password, user.password);
    if (!comparePassword) res.status(400).json("Incorrect password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: req.user.isAdmin,
        restrictUser: req.user.restrictUser,
      },
      {
        Secret: process.env.SECRET,
      },
      {
        expiresIn: "3d",
      }
    );

    const allowUser = await User.findById(user._id).select["-password"];
    res.status(200).json({
      user: allowUser,
      token: accessToken,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { signupUser, loginUser };
