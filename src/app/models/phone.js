const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const phones = new Schema({
    sdt: { type: String },
    status: { type: String},
  });

module.exports = mongoose.model('phones',phones);
