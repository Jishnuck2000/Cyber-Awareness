const express = require("express");
const cartroutes = express.Router();
const cart = require("../models/cartschema");

const multer = require("multer");
const checkauth = require("../middleware/checkauth");
// const checkauth = require("../middleware/checkauth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../cyber/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

cartroutes.post(
  "/addcart",
  upload.single("image"),
  checkauth,
  async (req, res) => {
    const Data = await new cart({
      image: req.body.image,
      name: req.body.name,
      usage: req.body.usage,
      description: req.body.description,
      validity: req.body.validity,
      price: req.body.price,
      quantity: req.body.quantity,
      subtotal: req.body.subtotal,
      total: req.body.total,
      login_id: req.userData.userId,
    });

    await Data.save()
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
  }
);

cartroutes.get("/viewcart", checkauth, (req, res) => {
  cart
    .find({
      login_id:req.userData.userId,
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
        message: "Failed",
      });
    });
});

cartroutes.put("/addquantity/:id", checkauth, async (req, res) => {
  console.log(req.params.id);
  try {
    const userId = req.userData.userId;
    const id = req.params.id;

    const cart_item = await cart.findOne({
      login_id: userId,
      _id: id,
    });
    console.log(cart_item);

    const quantity1 = await cart_item.quantity;
    // console.log('hhhh',incre_qty)
    const incre_qty = await cart.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          quantity: quantity1 + 1,
        },
      }
    );
    const increment_qty = quantity1 + 1;

    console.log("increment_qty", increment_qty);
    if (increment_qty) {
      return res.status(200).json({
        success: true,
        error: false,
        incre_data: increment_qty,
        meassage: "increment successfull",
      });
    } else
      (err) => {
        return res.status(400).json({
          success: false,
          error: true,
          Errormessage: err.message,
          message: "Failed",
        });
      };
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: true,
      Errormessage: err.message,
      message: "Network error",
    });
  }
});

cartroutes.put("/decrementquantity/:id", checkauth, async (req, res) => {
  try {
    const userId = req.userData.userId;
    const id = req.params.id;

    const cart_item = await cart.findOne({
      login_id: userId,
      _id: id,
    });
    console.log(cart_item);

    const quantity2 = cart_item.quantity;
    console.log(quantity2);

  

    if (quantity2 >1) {
      var decre_qty = await cart.updateOne(
        {
          _id: req.params.id,
        },
        {
          $set: {
            quantity: quantity2 - 1,
          },
        }
      );
    }
    if (quantity2<=1) {
      await cart.deleteOne({
        _id: req.params.id,
      });
    }

    if (decre_qty) {
      return res.status(200).json({
        success: true,
        error: false,
        meassage: "decrement successfull",
      });
    } else
      (err) => {
        return res.status(400).json({
          success: false,
          error: true,
          Errormessage: err.message,
          message: "Failed",
        });
      };
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: true,
      Errormessage: err.message,
      message: "Network error",
    });
  }
});

cartroutes.delete("/deletecartitems/:id", (req, res) => {
  cart
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

module.exports = cartroutes;
