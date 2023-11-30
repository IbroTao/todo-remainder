const { User } = require("../models/user.model");
const { hashSync, compareSync, compare, hash } = require("bcryptjs");
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

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find().sort({
      createdAt: "desc",
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUserPassword = async (req, res) => {
  const userData = {
    oldPassword: req.body.oldPassword,
    newPassword: req.body.newPassword,
    userAccess: req.params.id,
  };

  try {
    let user = await User.findById(userData.userAccess);
    if (!user) {
      res.status(404).json("User not found");
    } else {
      const comparePassword = await compare(
        userData.oldPassword,
        user.password
      );
      if (comparePassword) {
        user.password = await hash(userData.newPassword, 10);
        const updatedUser = await user.save();
        res.status(200).json("User password updated");
      } else {
        res.status(400).json("Incorrect password");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUserEmail = async (req, res) => {
  const userData = {
    email: req.body.email,
    password: req.body.email,
    id: req.params.id,
  };
  try {
    let user = await User.findById(userData.id);
    if (user) {
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  signupUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUserPassword,
};
