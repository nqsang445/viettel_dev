const Internet = require('../models/Internet');
const Create = require('../models/Create');
const Family = require('../models/giadinh');
const Combo = require('../models/combo');
const userModel = require('../models/userModel');
const Promotion = require('../models/promotions');
const Phones = require('../models/phone');
const jwt = require('jsonwebtoken');
const verifyToken = require('../midleware/login');
const { multipleMongooseToObject, mongooseToObject } = require('../../until/mongoose');
const { updateOne } = require('../models/Internet');



class UserControllers {
    //admin
    
    // page_admin_viettel
    dangnhap(req, res, next) {
        res.render('page_admin_viettel');
    }

    // [GET] /admin
    login(req, res, next) {

        const userLogin = req.body.user;
        const passwordLogin = req.body.password;
        const err = 'Tài khoản hoặc mật khẩu không chính xác';
        userModel.findOne({
            user: userLogin,
            password: passwordLogin
        })
            .then(data => {
                if (data) {
                    var token = jwt.sign({ _id: data._id }, 'mk');
                    return res.render('login', {
                        token: token
                    })
                } else {
                    res.send('Tài khoản hoặc mật khẩu không chính xác');
                }
            })
            .catch(err => {
                res.status(500), json('ERROR server')
            });


    }
    danhsach_dk(req, res, next) {
        
        Create.find({})
            .then(shows_information => {
                res.render('danhsach_dk', {
                    shows_information: multipleMongooseToObject(shows_information),


                });
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }




    // xử lý trang gói cước doanh nghiệp
    // [GET] /goicuocdoanhnghiep
    goicuocdoanhnghiep(req, res, next) {
        Internet.find({})
            .then(shows_dn => {
                res.render('goicuocdoanhnghiep', {
                    shows_dn: multipleMongooseToObject(shows_dn)
                });
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    // Thêm gói cước doanh nghiệp
    //[GET] /create_doanhnghiep
    create_doanhnghiep(req, res) {
        res.render('courses/create_doanhnghiep');
    }
    // [POST] /store_goicuocdoanhnghiep
    store_goicuocdoanhnghiep(req, res, next) {
        const add_doanhnghiep = new Internet(req.body);
        add_doanhnghiep.save({})
            .then(temp => {
                res.redirect('goicuocdoanhnghiep');
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });

    }
    // Thêm gói cước doanh nghiệp

    // Sửa gói cước doanh nghiệp
    // [GET] /:id/edit_doanhnghiep
    edit_doanhnghiep(req, res, next) {
        Internet.findById(req.params.id)
            .then(edit_doanhnghiep => res.render('courses/edit_doanhnghiep', {
                edit_doanhnghiep: mongooseToObject(edit_doanhnghiep)
            }))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    // [GET] /:id/update_goicuocdoanhnghiep
    update_goicuocdoanhnghiep(req, res, next) {
        Internet.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/goicuocdoanhnghiep'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    // Sửa gói cước doanh nghiệp
    // Xóa gói cước doanh nghiệp

    delete_goicuocdoanhnghiep(req, res, next) {
        Internet.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    // Xóa gói cước doanh nghiệp
    // end xử lý trang gói cước doanh nghiệp

    //   xử lý trang gói cước gia đình
    // [GET] /goicuocgiadinh
    goicuocgiadinh(req, res, next) {

        Family.find({})
            .then(shows_gcgd => {
                res.render('goicuocgiadinh', {
                    shows_gcgd: multipleMongooseToObject(shows_gcgd)

                });
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    //[GET] /create_doanhnghiep
    create_giadinh(req, res) {
        res.render('courses/create_giadinh');
    }

    // [POST] /store_goicuocgiadinh
    store_goicuocgiadinh(req, res, next) {
        const add_giadinh = new Family(req.body);
        add_giadinh.save({})
            .then(temp => {
                res.redirect('goicuocgiadinh');
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });

    }

    // [GET] /:id/edit_giadinh
    edit_giadinh(req, res, next) {
        Family.findById(req.params.id)
            .then(edit_giadinh => res.render('courses/edit_giadinh', {
                edit_giadinh: mongooseToObject(edit_giadinh)
            }))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    // [GET] /:id/update_goicuocgiadinh
    update_goicuocgiadinh(req, res, next) {
        Family.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/goicuocgiadinh'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    // delete_goicuocgiadinh
    delete_goicuocgiadinh(req, res, next) {
        Family.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    // end  xử lý trang gói cước gia đình





    // [GET] /combo
    combo(req, res, next) {

        Combo.find({})
            .then(shows_combo => {
                res.render('combo', {
                    shows_combo: multipleMongooseToObject(shows_combo)

                });
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    create_combo(req, res) {
        res.render('courses/create_combo');
    }

    // [POST] /store_combo
    store_combo(req, res, next) {
        const add_combo = new Combo(req.body);
        add_combo.save({})
            .then(temp => {
                res.redirect('combo');
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });

    }// [GET] /:id/edit_combo
    edit_combo(req, res, next) {
        Combo.findById(req.params.id)
            .then(edit_combo => res.render('courses/edit_combo', {
                edit_combo: mongooseToObject(edit_combo)
            }))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    // update_combo
    // [GET] /:id/update_combo
    update_combo(req, res, next) {
        Combo.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/combo'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    // delete_combo

    delete_combo(req, res, next) {
        Combo.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    // delete danh sach đăng ký
    delete_dsdk(req, res, next) {
        Create.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    // khuyen mai

    promotion(req, res, next) {

        Promotion.find({})
            .then(shows_promotions => {
                res.render('promotion', {
                    shows_promotions: multipleMongooseToObject(shows_promotions),
                    layouts: false
                });
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    promotions(req, res, next) {
        res.render('courses/promotions')
    }
    store_promotions(req, res, next) {
        const add_promotions = new Promotion(req.body);
        add_promotions.save({})
            .then(temp => {
                res.redirect('promotion');
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }

    edit_promotions(req, res, next) {
        Promotion.findById(req.params.id)
            .then(edit_promotion => res.render('courses/edit_promotion', {
                edit_promotion: mongooseToObject(edit_promotion)
            }))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    update_promotions(req, res, next) {
        Promotion.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/promotion'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    delete_promotions(req, res, next) {
        Promotion.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    // phone
    phone(req, res, next) {

        Phones.find({})
            .then(shows_phone => {
                res.render('phone', {
                    shows_phone: multipleMongooseToObject(shows_phone),
                });
            })
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    edit_phone(req, res, next) {
        Phones.findById(req.params.id)
            .then(edit_phone => res.render('courses/edit_phone', {
                edit_phone: mongooseToObject(edit_phone)
            }))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    update_phone(req, res, next) {
        Phones.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/phone'))
            .catch(err => {
                res.status(500).json('Lỗi Server')
            });
    }
    password_admin(req, res, next) {
        res.render('courses/password_admin');
    }

    async update_password(req, res, next) {
        try {
            var passold = req.body.password;
            var passnew = req.body.passwordnew;

            var findData = await userModel.findOne({
                password: passold
            })
        
            if (findData.password === passold) {
                findData.password = passnew;
               await userModel.updateOne({ _id: findData._id }, { $set: findData })
               res.send('thanh cong');
            } else {
                res.status(404).json('that bai')
            }
        } catch (error) {
            res.send(error);
        }

    }
}

module.exports = new UserControllers;