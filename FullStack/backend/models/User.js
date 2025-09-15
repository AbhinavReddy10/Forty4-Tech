const mongoose = require('mongoose');

const GeoSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});

const AddressSchema = new mongoose.Schema({
  street: { type: String, default: '' },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  geo: { type: GeoSchema, required: true },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  company: { type: String },
  address: { type: AddressSchema, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
