const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
      flavor: {
        type: String,
        required: true
      },
      drink: {
        type: String,
        required: false
      },
      phone: {
        type: String,
        required: false
      },
      table: {
        type: Number,
        required: true
      },
      clientName : {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: false
      },
      status: {
        type: Boolean,
        required: true
      }
    },
    {
      timestamps: true
    }
  );
 
module.exports = mongoose.model("orders", courseSchema);