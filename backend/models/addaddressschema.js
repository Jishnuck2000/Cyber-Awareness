const mongoose = require("mongoose");
const addaddressschema = new mongoose.Schema({

    login_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "login_tb",
        required: true,
      },
      name: {
        type:String,
        required:true,
      },
      location: {
        type:String,
        required:true,
      },
      phone_no: {
        type:Number,
        required:true,

      },
      house_name: {
        type :String,
        required:true,
      },
      city:{
        type:String,
        required:true,
      },
      district: {
        type:String,
        required:true,
      },
      state:{
        type:String,
        required:true,
      },
      pincode:{
        type:Number,
        required:true,
      },
      addresstype:{
        type:String,
        default:''
      },
      




})
module.exports = mongoose.model("address", addaddressschema);
