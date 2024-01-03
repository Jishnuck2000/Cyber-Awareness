const mongoose = require("mongoose");
const volunteerschema = new mongoose.Schema({
  Image: {
    type:String,
  },
  login_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "login_tb",
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Phone_no: {
    type: Number,
    required: true,
  },
  Qualification: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    default:'pending',
    require:true,
  },
});

const Volunteerdata = mongoose.model("volunteer", volunteerschema);
module.exports = Volunteerdata;
