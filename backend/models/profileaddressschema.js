const mongoose = require('mongoose')
const profileaddressschema = new mongoose.Schema({

    login_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "login_tb",
        required: true,
      },  
  house_name:{
    type:String,
    required:true,

  },
  street_address:{
    type:String,
    required:true,

  },
  
  district:{
    type:String,
    required:true,
  },
  state:{
    type:String,
    required:true,
  },
  phone_no:{
    type:Number,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  addresstype:{
    type:String,
    default:''
  },




})
module.exports = mongoose.model('profileaddress',profileaddressschema)