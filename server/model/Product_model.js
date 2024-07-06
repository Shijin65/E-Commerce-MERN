const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  currency: { type: String, required: true },
  oldPrice: { type: Number },
  newPrice: { type: Number, required: true }
});

const featureSchema = new mongoose.Schema({
    feature: { type: String, required: true },
    value: { type: String, required: true }
  });

const storageSchema = new mongoose.Schema({
  storage: { type: String, required: true },
  price: { type: Number, required: true }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand:{ type: String, required: true },
  colors: { type: [String], required: true },
  price: priceSchema,
  description: { type: String, required: true },
  storageOptions: { type: [storageSchema], required: true },
  features: [featureSchema],
  images: { type: [String], required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;