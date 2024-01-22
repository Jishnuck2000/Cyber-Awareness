const express = require("express");
const usersroutes = express.Router();
const complaint = require("../models/complaintschema");
const addaddress = require("../models/addaddressschema");
const sessionbooking = require("../models/sessionbookingschema");
const checkauth = require("../middleware/checkauth");
const Registerdata = require("../models/registerschema");
const { default: mongoose } = require("mongoose");
const addadminsession = require("../models/adminaddsessionschema");
const { updateOne } = require("../models/cartschema");

//add

usersroutes.post("/addcompliant", (req, res) => {
  const Data = new complaint({
    Name: req.body.Name,
    Age: req.body.Age,
    Address: req.body.Address,
    Phone_no: req.body.Phone_no,
    Email: req.body.Email,
    Discription: req.body.Discription,
  });

  Data.save()
    .then((data) => {
      res.status(201).json({
        success: true,
        error: false,
        data: data,
        message: "complaint registered successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: true,
        Errormessage: error,
        message: "complaint registration failed",
      });
    });
});

//view

usersroutes.get("/view", (req, res) => {
  complaint
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// //view one

// restapiroutes.get('/view/:id', (req, res) => {
//     complaint.findOne({
//         _id: req.params.id,
//     })
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((err) => {
//             res.send(err)
//         })
// })

// Delete One

// restapiroutes.delete('/delete/:id', (req, res) => {
//     complaint.deleteOne({
//         _id: req.params.id
//     })
//         .then((data) => {
//             res.send('Deleted Successfully')
//         })
//         .catch((err) => {
//             res.send(err)
//         })
// })

// // Update One

// restapiroutes.put('/update/:id', (req, res) => {
//     complaint.findOne({
//         _id: req.params.id,
//     })
//         .then((data) => {
//             data.Name=req.body.Name,
//                 data.Age=req.body.Age,
//                 data.Address=req.body.Address,
//                 data.Phone_no=req.body.Phone_no,
//                 data.Email=req.body.Email,
//                 data.Discription=req.body.Disciption,
//             data.save()
//                 .then((data) => {
//                     res.send(data)
//                 })
//                 .catch((err) => {
//                     res.send(err)
//                 })
//         })

// })

//sessionbooking routes

usersroutes.post("/addsession", checkauth, (req, res) => {
  const Data = new sessionbooking({
    Name: req.body.Name,
    Address: req.body.Address,
    Pincode: req.body.Pincode,
    City: req.body.City,
    District: req.body.District,
    State: req.body.State,
    Date: req.body.Date,
    time: req.body.time,
    about: req.body.about,
    Phone_no: req.body.Phone_no,
    Email: req.body.Email,
    login_id: req.userData.userId,
  });

  Data.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

usersroutes.get("/viewsession", checkauth, (req, res) => {
  sessionbooking
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

usersroutes.get("/user-viewsession", checkauth, (req, res) => {
  const userId = req.userData.userId;
  sessionbooking
    .find({
      login_id: req.userData.userId,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

usersroutes.delete("/deletesession/:id", (req, res) => {
  sessionbooking
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

usersroutes.put("/updatesession/:id", (req, res) => {
  sessionbooking
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      (data.Name = req.body.Name),
        (data.Address = req.body.Address),
        (data.Pincode = req.body.Pincode),
        (data.City = req.body.City),
        (data.District = req.body.District),
        (data.State = req.body.State),
        (data.Date = req.body.Date),
        (data.Phone_no = req.body.Phone_no),
        (data.Email = req.body.Email),
        data
          .save()
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.send(err);
          });
    });
});

usersroutes.get("/viewprofile", checkauth, (req, res) => {
  Registerdata.aggregate([
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
        username: {
          $first: "$username",
        },
        email_id: {
          $first: "$result.email_id",
        },
        password: {
          $first: "$result.password",
        },
        phone_no: {
          $first: "$phone_no",
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
});

usersroutes.get("/viewadminsessionform", (req, res) => {
  addadminsession
    .find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "fetched data successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: true,
        message: "failed fetching data",
        Errormessage: error,
      });
    });
});

usersroutes.get("/viewusersbookedsession", checkauth, (req, res) => {
  sessionbooking
    .find({ login_id: req.userData.userId })
    .then((data) => {
      res.status(201).json({
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
        message: "failed",
      });
    });
});

// ------------------addaddresspurchase--------------------

usersroutes.post("/addaddress", checkauth, (req, res) => {
  const Data = new addaddress({
    login_id: req.userData.userId,
    name: req.body.name,
    location: req.body.location,
    phone_no: req.body.phone_no,
    house_name: req.body.house_name,
    city: req.body.city,
    district: req.body.district,
    state: req.body.state,
    pincode: req.body.pincode,
  });

  Data.save()
    .then((data) => {
      res.status(201).json({
        success: true,
        error: false,
        data: data,
        message: "Address added successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: true,
        Errormessage: error,
        message: "failed",
      });
    });
});

usersroutes.get("/viewaddaddress", checkauth, (req, res) => {
  addaddress
    .find()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "fetched data successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: true,
        message: "failed fetching data",
        Errormessage: error,
      });
    });
});

usersroutes.put("/updateaddresstype/:id",checkauth, async (req, res) => {
  try {
    const updatePrimary = await addaddress.updateMany(
      { login_id: req.userData.userId },
      { $set: { addresstype: "" } }
    );
    const updateAddressType = await addaddress.updateOne(
      { _id: req.params.id, login_id: req.userData.userId },
      { $set: { addresstype: "primary" } }
    );
    if (updatePrimary && updateAddressType) {
      res.status(200).json({
        success: true,
        error: false,
        data: updateAddressType,
        message: "updated addresstype data successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        error: true,
        message: "updation failed",
        Errormessage: error,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error",
      Errormessage: error.message,
    });
  }
});

usersroutes.get("/viewoneaddress/:id", checkauth, (req, res) => {
  addaddress
    .findOne({
      _id: req.params.id,
    })

    .then((data) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "Data fetched successfully",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: true,
        data: data,
        message: "Failed",
      });
    });
});

usersroutes.put("/updateaddress/:id", checkauth, async (req, res) => {
  try {
    const oldData = await addaddress.findOne({ _id: req.params.id });
    const updateData = {
      name: req.body.name ? req.body.name : oldData.name,
      location: req.body.location ? req.body.location : oldData.location,
      phone_no: req.body.phone_no ? req.body.phone_no : oldData.phone_no,
      house_name: req.body.house_name
        ? req.body.house_name
        : oldData.house_name,
      city: req.body.city ? req.body.city : oldData.city,
      district: req.body.district ? req.body.district : oldData.district,
      state: req.body.state ? req.body.state : oldData.state,
      pincode: req.body.pincode ? req.body.pincode : oldData.pincode,
    };
    const updateAddress = await addaddress.updateOne(
      { _id: req.params.id },
      { $set: updateData }
    );
    if (updateAddress) {
      return res.status(200).json({
        success: true,
        error: false,
        Data: updateAddress,
        message: "updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "Internal server error",
      Errormessage: error.message,
    });
  }

  // try {
  //   await addaddress
  //     .findOne({
  //       _id: req.params.id,
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       (data.name = req.body.name ? req.body.name : data.name),
  //         (data.location = req.body.location ? req.body.location : data.location),
  //         (data.phone_no = req.body.phone_no ? req.body.phone_no : data.phone_no),
  //         (data.house_name = req.body.house_name ? req.body.house_name : data.house_name),
  //         (data.city = req.body.city ? req.body.city : data.city),
  //         (data.district = req.body.district ? req.body.district : data.district),
  //         (data.state = req.body.state ? req.body.state : data.state),
  //         (data.pincode = req.body.pincode ? req.body.pincode : data.pincode);
  //       data
  //         .save()

  //         .then((data) => {
  //           return res.status(200).json({
  //             success: true,
  //             error: false,
  //             data: data,
  //             message: "Data fetched successfully",
  //           });
  //         })
  //         .catch((err) => {
  //           return res.status(400).json({
  //             success: false,
  //             error: true,
  //             message: "Failed",
  //             Errormessage: err.message,
  //           });
  //         });
  //     })
  //     .catch((err) => {
  //       return res.status(400).json({
  //         success: false,
  //         error: true,
  //         message: "Failed",
  //         Errormessage: err.message,
  //       });
  //     });
  // } catch (error) {
  //   return res.status(400).json({
  //     success: false,
  //     error: true,
  //     message: "error",
  //     errormessage: err.message,
  //   });
  // }
});



usersroutes.delete("/deleteaddress/:id",checkauth,(req, res) => {
  addaddress
    .deleteOne({
      _id: req.params.id,
    })
    .then((data) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "Data deleted successfully",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: true,
        data: data,
        message: "Failed",
      });
    });
});







usersroutes.get("/vieworderaddress", checkauth, (req, res) => {
  addaddress
    .findOne({
       login_id: req.userData.userId 
    ,addresstype:"primary"})

    .then((data) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "Data fetched successfully",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        error: true,
        data: data,
        message: "Failed",
      });
    });

  });

module.exports = usersroutes;
