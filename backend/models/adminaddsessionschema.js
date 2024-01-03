const mongoose = require('mongoose')
const adminaddsessionschema = new mongoose.Schema({


    date:{
        type:String,
        required:true,
    },
    
    about:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
   


   

})

module.exports = mongoose.model('sessionbooking',adminaddsessionschema)