const mongoose = require('mongoose')
const profileimageschema = new mongoose.Schema({

    login_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "login_tb",
        required: true,
      },
  
  image:{
    type:String,
    
  },
 




})
module.exports = mongoose.model('profileimage',profileimageschema)