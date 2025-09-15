const User = require('../models/User');
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  company: Joi.string().allow('', null),
  address: Joi.object({
    street: Joi.string().allow('', null),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
    geo: Joi.object({
      lat: Joi.number().required(),
      lng: Joi.number().required(),
    }).required(),
  }).required(),
});

exports.getAll = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
};

exports.getOne = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.create = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

exports.update = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.remove = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
};
