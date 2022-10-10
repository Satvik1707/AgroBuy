const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");
const User = require("../models/UserModel");
const Breeder = require("../models/BreederModel");
const Transport = require("../models/TransportModel");

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

router.post("/createbreeder", async (req, res) => {
  const { user } = req.body;
  const idnew = user._id;
  try {
    const loggedin = await User.findOne({ id: idnew });
    const newBreeder = new Breeder({
      user: loggedin.id,
      email: loggedin.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address1: user.address1,
      address2: user.address2,
      cityName: user.city,
      state: user.state,
      pincode: user.pincode,
      phoneNo: user.phnNo,
    });
    const createbreeder = await newBreeder.save();
    res.status(201).json(createbreeder);
    res.status(201).send("Breeder registration request sent");
  } catch (error) {
    res.json({ message: error.data });
  }
});

router.post("/getbreederbyid", async (req, res) => {
  const userid = req.body.id;
  try {
    const user = await Breeder.findOne({ user: userid });
    res.json({ user });
  } catch (error) {
    res.json({ messaage: error });
  }
});

router.post("/createtransport", async (req, res) => {
  const { user } = req.body;
  const idnew = user._id;
  try {
    const loggedin = await User.findOne({ id: idnew });
    const newBreeder = new Transport({
      user: loggedin.id,
      email: loggedin.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address1: user.address1,
      address2: user.address2,
      cityName: user.city,
      state: user.state,
      pincode: user.pincode,
      phoneNo: user.phnNo,
    });
    const createbreeder = await newBreeder.save();
    res.status(201).json(createbreeder);
    res.status(201).send("Breeder registration request sent");
  } catch (error) {
    res.json({ message: error.data });
  }
});

module.exports = router;
