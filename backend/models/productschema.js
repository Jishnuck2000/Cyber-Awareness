const mongoose = require('mongoose')
const productschema = new mongoose.Schema({

  name:{
    type:String,
    required:true,

  },
  usage:{
    type:String,
    required:true,

  },
  image:{
    type:String,
    
  },
  description:{
    type:String,
    required:true,
  },
  validity:{
    type:String,
    required:true,
  },
  price:{
    type:String,
    required:true,
  },




})
module.exports = mongoose.model('products',productschema)