const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");
const User = require("../models/UserModel");

const router = express.Router();

//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);

//get user profile Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    // console.log(users);
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

module.exports = router;
