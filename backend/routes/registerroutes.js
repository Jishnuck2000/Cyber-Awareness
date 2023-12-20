const express = require("express");
const registerroutes = express.Router();
const bcrypt = require("bcryptjs");
const registerDB = require("../models/registerschema");
const loginDB = require("../models/loginschema");
const volunteerregisterDB = require("../models/volunteersschema");

const multer = require('multer');
const checkauth = require("../middleware/checkauth");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../cyber/public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });


// user registrationrd
registerroutes.post("/reg", async (req, res) => {
  console.log('Test:',req.body.email_id);
  try { 
    // console.log('hai')
    const oldUser = await loginDB.findOne({ email_id: req.body.email_id });
    console.log(oldUser)
    if (oldUser) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "User already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldphone = await registerDB.findOne({ phone_no: req.body.phone_no });
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    if (oldphone) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phone number already exists",
      });
    }
    let log = {
      email_id: req.body.email_id,
      password: hashedPassword,
      role: 2,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      username: req.body.username,
      phone_no: req.body.phone_no,
    };
    const result2 = await registerDB(reg).save();
    if (result2) {
      res.status(201).json({
        success: true,
        error: false,
        message: "Registration completed",
        details: result2,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",

      errorMessage: error.message,
    }); 
    console.log(error);
  }
});








// volunteer registration
registerroutes.post("/volunteerregister",upload.single('Image'), async (req, res) => {

  try {
    const oldVolunteer = await loginDB.findOne({ email_id: req.body.email_id });
    if (oldVolunteer) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "Volunteer already exists" });
    }
    // const { firstName, lastName, email, password, role } = req.body;

    const oldphone = await volunteerregisterDB.findOne({ Phone_no: req.body.phone_no });
    if (oldphone) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Phone number already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    let log = {
      email_id: req.body.email_id,
      password: hashedPassword,
      role: 3,
    };
    const result = await loginDB(log).save();
    let reg = {
      login_id: result._id,
      Image:req.file?req.file.filename:null,
      Name: req.body.Name,
      Age:req.body.Age,
      Address:req.body.Address,
      Phone_no:req.body.Phone_no,
      Qualification:req.body.Qualification,
      
    };
    const result2 = await volunteerregisterDB(reg).save();
    if (result2) {
      res.status(201).json({
        success: true,
        error: false,
        message: "Volunteer Registration completed",
        details: result2,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Something went wrong",

      errorMessage: error.message,
    });
    console.log(error);
  }
});






module.exports = registerroutes;
