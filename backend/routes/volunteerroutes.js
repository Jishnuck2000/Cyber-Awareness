const express = require("express");
const volunteerroutes = express.Router();
const volunteer = require("../models/volunteersschema");
const checkauth = require("../middleware/checkauth");
const { default: mongoose } = require("mongoose")


const multer = require('multer');
const Volunteerdata = require("../models/volunteersschema");
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











volunteerroutes.get("/viewvolunteers/approved", (req, res) => {
  volunteer
    .find({
      status:'approved'
    })
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

volunteerroutes.put("/updatevolunteers/approved/:id",(req,res)=>{
  volunteer.updateOne({
    _id:req.params.id

  },
    {
      $set:{status:'approved'}
    }
  )

  .then((data) => {
    res.status(200).json({
      success: true,
      error: false,
      data: data,
      message: "Data updated successfully",
    });
  })
  .catch((err) => {
    res.status(400).json({
      success: false,
      error: true,
      data: data,
      message: "Data updation failed",
      errormessage:err.message
    });
  });
})



volunteerroutes.put("/updatevolunteers/rejected/:id",(req,res)=>{
  volunteer.updateOne({
    _id:req.params.id

  },
    {
      $set:{status:'rejected'}
    }
  )

  .then((data) => {
    res.status(200).json({
      success: true,
      error: false,
      data: data,
      message: "Data updated successfully",
    });
  })
  .catch((err) => {
    res.status(400).json({
      success: false,
      error: true,
      data: data,
      message: "Data updation failed",
      errormessage:err.message
    });
  });
})



volunteerroutes.get("/volunteerprofile",checkauth,(req,res)=>{
  try{


    Volunteerdata.aggregate([



      {
        $lookup: {
          from: "login_tbs",
          localField: "login_id",
          foreignField: "_id",
          as: "result",
        },
      },
      {
        $unwind: {
          path: "$result",
        },
      },
  
      {
        $match: { login_id: new mongoose.Types.ObjectId(req.userData.userId) },
      },
      {
        $group: {
          _id: "$_id",
          Image: {
            $first: "$Image",
          },
          email_id: {
            $first: "$result.email_id",
          },
          password: {
            $first: "$result.password",
          },
          Name: {
            $first: "$Name",
          },
          Age: {
            $first: "$Age",
          },
          Address: {
            $first: "$Address",
          },
          Phone_no: {
            $first: "$Phone_no",
          },
          Qualification: {
            $first: "$Qualification",
          },
          
          
          
  
          login_id: {
            $first: "$login_id",
          },
        },
      },
  
  
    ])


    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "fetched profile successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: true,
        message: "failed fetching profile",
        Errormessage: error,
      });
    });


  }catch(error){
   return res.status(500).json({
      success: false,
      error: true,
      message: "failed fetching profile",
      Errormessage: error.message,
    });
  }
  



 
})






module.exports = volunteerroutes;
