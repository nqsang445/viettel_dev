const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Create = new Schema({
    tenkhachhang: { type: String},
    sdt: { type: String },
    diachi: { type: String},
    goicuoc: { type: String },
    status: {type: Number},
    thoigian: {type: String},
  },{
    collection : 'information'
  });

module.exports = mongoose.model('information',Create);
