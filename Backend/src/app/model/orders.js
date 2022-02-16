const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
      pizza: {
        type: String,
        required: true
      },
      drink: {
        type: String,
        required: false
      },
      idClient: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );
 
module.exports = mongoose.model("RequestedOrders", orderSchema);