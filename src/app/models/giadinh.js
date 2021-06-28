const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const family = new Schema({
    name_gcgd: { type: String },
    data_gd: { type: String },
    promotions_gd: { type: String },
    price_gd: { type: String },
   
  },{
    timestamps: true,
  });

module.exports = mongoose.model('familys',family);
