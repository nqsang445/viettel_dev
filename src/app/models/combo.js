const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const combo = new Schema({
    name_combo: { type: String },
    data_combo: { type: String },
    range: { type: String },
    promotions_combo: { type: String },
    price_combo: { type: String },
   
  },{
    timestamps: true,
  });

module.exports = mongoose.model('combos',combo);
