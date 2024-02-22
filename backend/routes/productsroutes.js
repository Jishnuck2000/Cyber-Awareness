const express = require("express");
const productsroutes = express.Router();
const products = require("../models/productschema");

const multer = require("multer");
const checkauth = require("../middleware/checkauth");

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Cyber_Awareness',
  },
});
const upload = multer({ storage: storage });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../cyber/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

productsroutes.post("/addproducts", upload.single("image"),checkauth,(req, res) => {
  const Data = new products({
    // image: req.file ? req.file.filename : null,
    image: req.file ? req.file.path : null,
    name: req.body.name,
    usage: req.body.usage,
    description: req.body.description,
    validity: req.body.validity,
    price: req.body.price,
  });

  Data.save()
    .then((data) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: "Data successfully added",
      });
    })

    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        Errormessage: error,
        message: "Failed",
      });
    });
});

productsroutes.get("/viewproducts", (req, res) => {
  products
    .find()
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

productsroutes.get("/viewoneproduct/:id", (req, res) => {
  products
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

productsroutes.put(
  "/updateproducts/:id",
  upload.single("image"),checkauth,
  async (req, res) => {
    // console.log("image file",req.file.filename)
    try {
      const data = await products.findOne({
        _id: req.params.id,
      });
      const productData = {
        image: req.file.filename ? req.file.filename : data.image,
        name: req.body.name ? req.body.name : data.name,
        usage: req.body.usage ? req.body.usage : data.usage,
        description: req.body.description
          ? req.body.description
          : data.description,
        validity: req.body.validity ? req.body.validity : data.validity,
        price: req.body.price ? req.body.price : data.price,
      };
      const productsUpdate = await products.updateOne(
        { _id: req.params.id },
        { $set: productData },
      );
      if (productsUpdate) {
        return res.status(200).json({
          success: true,
          error: false,
          data: productsUpdate,
          message: "Data updated successfully",
        });
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          errordata: error,
          Errormessage: err.message,
          message: "Failed",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: true,
        errordata: error,
        Errormessage: error.message,
        message: "Failed",
      });
    }
  }
);

productsroutes.delete("/deleteproducts/:id",checkauth, (req, res) => {
  products
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

module.exports = productsroutes;
