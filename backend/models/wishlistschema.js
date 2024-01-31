const mongoose = require("mongoose");
const wishlistschema = new mongoose.Schema({
  login_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "login_tb",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  
});
module.exports = mongoose.model("favorites", wishlistschema);
