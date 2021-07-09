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


        Promise.all([Internet.find({}),Family.find({}),Combo.find({}),Promotion.find({}),Phones.find({})])
            .then(([internets,familys,combos,promotions,phones]) =>{
                res.render('home', {
                    internets: multipleMongooseToObject(internets.slice(0,6)),
                    familys: multipleMongooseToObject(familys.slice(0,6)),
                    combos: multipleMongooseToObject(combos.slice(0,6)),
                    promotions: multipleMongooseToObject(promotions),
                    phones: multipleMongooseToObject(phones)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });

        
    }
    store(req, res, next) {
        const time = new Date();
        const getTime = `${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()}`;
         const add = (req.body);
        add.thoigian = getTime;
        Create.insertMany(add)
        Promise.all([Internet.find({}),Family.find({}),Combo.find({}),Promotion.find({}),Phones.find({})])
        .then(([internets,familys,combos,promotions,phones]) =>{
            res.render('home', {
                internets: multipleMongooseToObject(internets.slice(0,6)),
                familys: multipleMongooseToObject(familys.slice(0,6)),
                combos: multipleMongooseToObject(combos.slice(0,6)),
                promotions: multipleMongooseToObject(promotions),
                phones: multipleMongooseToObject(phones),
                message: 'Đăng ký thành công',
            });
        })
        .catch(err=>{
            res.status(500).json('Lỗi Server')
        });
        // Create.({})
            // .then(temp => {
            //     res.send('Đăng ký thành công')
            // })
            // .catch(err=>{
            //     res.status(500).json('Lỗi Server')
            // });
    }
    internet(req, res, next) {
        Promise.all([Internet.find({}),Phones.find({})])
            .then(([internets,phones]) =>{
                res.render('internet', {
                    internets: multipleMongooseToObject(internets),
                    phones: multipleMongooseToObject(phones)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });
        
    }
    internet_combo(req, res, next) {
        Promise.all([Combo.find({}),Phones.find({})])
            .then(([icombo,phones]) =>{
                res.render('internet_combo', {
                    icombo: multipleMongooseToObject(icombo),
                    phones: multipleMongooseToObject(phones)
                });
            })
            .catch(err=>{
                res.status(500).json('Lỗi Server')
            });
        
    }
    internet_giadinh(req, res, next) {
        Promise.all([Family.find({}),Phones.find({})])
            .then(([ifamily,phones]) =>{
                res.render('internet_giadinh', {
                    ifamily: multipleMongooseToObject(ifamily),
                    phones: multipleMongooseToObject(phones)
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