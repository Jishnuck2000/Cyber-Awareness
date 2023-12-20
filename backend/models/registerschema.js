const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema definition

const registerschema = new Schema({
  login_id: { type: Schema.Types.ObjectId, ref: 'login_tb', required: true },
  username: { type: String, required: true },
  phone_no: { type: Number, required: true },


});

var Registerdata = mongoose.model('register_tb', registerschema); //model creation
module.exports = Registerdata;
