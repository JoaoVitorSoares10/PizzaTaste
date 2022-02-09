const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
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
 
module.exports = mongoose.model("pizzas", pizzaSchema);