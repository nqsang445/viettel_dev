const Internet = require('../models/Internet');
const Create = require('../models/Create');
const Family = require('../models/giadinh');
const Combo = require('../models/combo');
const Promotion = require('../models/promotions');
const Phones = require('../models/phone');
const jwt = require('jsonwebtoken');
const { multipleMongooseToObject, mongooseToObject } = require('../../until/mongoose');



class SiteControllers {

    index(req, res, next) {


        Promise.all([Internet.find({}),Family.find({}),Combo.find({}),Promotion.find({})])
            .then(([internets,familys,combos,promotions]) =>{
                res.render('home', {
                    internets: multipleMongooseToObject(internets.slice(-6)),
                    familys: multipleMongooseToObject(familys.slice(-6)),
                    combos: multipleMongooseToObject(combos.slice(-6)),
                    promotions: multipleMongooseToObject(promotions)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });

        
    }
    store(req, res, next) {
        const add = new Create(req.body);
        add.save({})
            .then(temp => {
                res.json('Đăng ký thành công')
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });
    }
    internet(req, res, next) {
        Internet.find({})
            .then(internets => {
                res.render('internet', {
                    internets: multipleMongooseToObject(internets)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });
    }
    internet_combo(req, res, next) {
        Combo.find({})
            .then(icombo => {
                res.render('internet_combo', {
                    icombo: multipleMongooseToObject(icombo)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });
    }
    internet_giadinh(req, res, next) {
        Family.find({})
            .then(ifamily => {
                res.render('internet_giadinh', {
                    ifamily: multipleMongooseToObject(ifamily)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });
    }
    
    
    LOGIN(req, res) {
        res.render('admin');
    }

    

}

module.exports = new SiteControllers;