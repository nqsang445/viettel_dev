const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const promotions = new Schema({
    month: { type: String },
    infor: { type: String },
  },{
    timestamps: true,
  });

module.exports = mongoose.model('promotions',promotions);
