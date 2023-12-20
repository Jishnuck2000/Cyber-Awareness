const mongoose = require('mongoose')
const complaintschema = new mongoose.Schema({

    Name:{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true,
    },
    Address:{
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
    Discription:{
        type:String,
        required:true,

    },
    Status:{
        type:String,
        required:true,

    },

})

module.exports = mongoose.model('details',complaintschema)