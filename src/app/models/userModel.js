const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userModel = new Schema({
    user: { type: String },
    password: { type: String },
  });

module.exports = mongoose.model('accounts',userModel);
