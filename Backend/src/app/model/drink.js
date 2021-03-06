const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  );
 
module.exports = mongoose.model("drinks", drinkSchema);