const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const internet = new Schema({
    name_goicuoc: { type: String },
    data_tn: { type: String },
    data_qt: { type: String },
    promotions: { type: String },
    price: { type: String },
    
  },{
    timestamps: true,
  });

module.exports = mongoose.model('internets',internet);
