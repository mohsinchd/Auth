const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(register);
router.route("/login").post(login);
router.route("/").get(protect, getAllUsers);

module.exports = router;
