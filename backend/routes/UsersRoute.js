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
  const idnew = user.id;
  console.log(idnew);
  try {
    const loggedin = await User.findOne({ _id: idnew });
    console.log(loggedin);
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

router.get("/breederlist", async (req, res) => {
  try {
    const users = await Breeder.find({});
    // console.log(users);
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
router.get("/transportlist", async (req, res) => {
  try {
    const users = await Transport.find({});
    // console.log(users);
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post("/denybreeder", async (req, res) => {
  try {
    const userid = req.body.id;
    const res = await Breeder.findOneAndDelete({ _id: userid });
    res.status(200).send("Breeder Rejected");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/denytransport", async (req, res) => {
  try {
    const userid = req.body.id;
    const res = await Transport.findOneAndDelete({ _id: userid });
    res.status(200).send("Transporter Rejected");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/approvetransport", async (req, res) => {
  try {
    const userid = req.body.id;
    // console.log(userid);
    const breeder = await Transport.findOne({ _id: userid });
    const user = breeder.user;
    // console.log(user);
    const userupdate = await User.findOne({ _id: user });
    // console.log(userupdate);
    userupdate.isTransport = true;
    await userupdate.save();
    await Transport.findOneAndDelete({ _id: userid });
    res.status(200).send("Breeder accepted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
