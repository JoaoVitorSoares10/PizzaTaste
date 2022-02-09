const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
      idPizza: {
        type: String,
        required: true
      },
      idDrink: {
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