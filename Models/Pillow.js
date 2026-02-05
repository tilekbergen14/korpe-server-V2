const mongoose = require("mongoose");

const PillowSchema = new mongoose.Schema({
  name: String,
  price: Number,
  length: Number,
  weight: Number,
  quantity: Number,
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
  }
}, { timestamps: true });

const Pillow = mongoose.model("Pillow", PillowSchema);

module.exports = Pillow;
