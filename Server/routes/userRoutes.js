const express = require("express");
const router = express.Router();

console.log("✅ userRoutes loaded");

const {
  registerUser,
  loginUser,
  updateProfile,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", updateProfile);

module.exports = router;