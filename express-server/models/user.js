const mongoose = require('../libs/mongoose.js');

const schemaUser = new mongoose.Schema({
  name: String,
  age: Number
});

exports.User = mongoose.model('User', schemaUser);