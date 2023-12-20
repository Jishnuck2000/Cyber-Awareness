const express = require("express");
const volunteerroutes = express.Router();
const volunteer = require("../models/volunteersschema");
const checkauth = require("../middleware/checkauth");


const multer = require('multer');
// const checkauth = require("../middleware/checkauth");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../cyber/public/upload');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

volunteerroutes.post("/volunteeradd",upload.single('Image'), (req, res) => {
  const Data = new volunteer({


    Image:req.file?req.file.filename:null,

    Name: req.body.Name,
    Age: req.body.Age,
    Address: req.body.Address,

    Qualification: req.body.Qualification,
    Phone_no: req.body.Phone_no,
  });

  Data.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

volunteerroutes.get("/viewvolunteers", (req, res) => {
  volunteer
    .find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "Data fetched successfully",
      });
    })
    .catch((err) => {
      res.status(400).json({
        success: false,
        error: true,
        data: data,
        message: "Data fetch failed",
      });
    });
});

volunteerroutes.delete("/volunteerdelete/:id", (req, res) => {
  console.log(req.params.id);
  volunteer
    .deleteOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.send("Successfully deleted");
    })
    .catch((err) => {
      res.send(err);
    });
});


volunteerroutes.get('/viewvolunteer/:id',(req,res) =>{
  // console.log(req.params.id)

  volunteer.findOne({
    _id:req.params.id,
    
  })
  .then((data) => {
    res.status(200).json({
      success: true,
      error: false,
      data: data,
      message: "data fetched successfully",
    });
    
  })
  .catch((err) => {
    res.status(400).json({
      success: false,
      error: true,
      data: data,
      message: "data fetching failed",
    });
  });
})



volunteerroutes.put("/volunteerupdate/:id",upload.single('Image'), (req, res) => {
  // console.log(req.params.id)

  try {
    
    volunteer
      .findOne({
        _id: req.params.id,
      })

      .then((data) => {
        // (data.Image = req.file.Image),

        
        (data.Image=req.file?req.file.filename:null),

        (data.Name = req.body.Name),
          (data.Age = req.body.Age),
          (data.Address = req.body.Address),
          (data.Qualification = req.body.Qualification),
          (data.Phone_no = req.body.Phone_no),
          data
            .save()
            .then((data) => {
              // console.log(data)
              res.status(200).json({
                success: true,
                error: false,
                data: data,
                message: "Updated successfully",
              });
              
            })
            .catch((err) => {
              res.status(400).json({
                success: false,
                error: true,
                data: data,
                message: "Updating failed",
              });
            });
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: true,
      message: err.message,
      message:"Error from try catch"
    });
  }
});

module.exports = volunteerroutes;
