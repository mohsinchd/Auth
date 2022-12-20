const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");
const User = require("../models/User");

// Register the User
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //   Find If User Already Exists
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  // Create New User
  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Bad User Data");
  }
});

// Login User

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter Both Email and Password");
  }

  // Find the User

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Incorrect Email or Password");
  }

  // Check if password is correct or not

  const checkPassword = await user.matchPassword(password);
  if (!checkPassword) {
    res.status(400);
    throw new Error("Incorrect Email or Password");
  }

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
});

module.exports = {
  register,
  login,
  getAllUsers,
};
