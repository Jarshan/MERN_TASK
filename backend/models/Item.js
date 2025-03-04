const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});


itemSchema.index({ name: 1 });

module.exports = mongoose.model("Item", itemSchema);




const Item = require("./models/Item");  // Make sure this path is correct
Item.collection.createIndex({ name: 1 })
  
  
