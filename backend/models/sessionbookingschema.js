const mongoose = require('mongoose')
const sessionbookingschema = new mongoose.Schema({

    login_id: { type: mongoose.Schema.Types.ObjectId, ref: 'login_tb', required: true },

    Name:{
        type:String,
        required:true,
    },
    
    Address:{
        type:String,
        required:true,
    },
    Pincode:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    District:{
        type:String,
        required:true,
    },
    State:{
        type:String,
        required:true,
    },
    

    Date:{
        type:String,
        required:true,
    },
    
    time:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        required:true,
    },



    Phone_no:{
        type:Number,
        required:true,
    },
    Email:{
        type:String,
        required:true,

    },
   

})

module.exports = mongoose.model('sessions',sessionbookingschema)