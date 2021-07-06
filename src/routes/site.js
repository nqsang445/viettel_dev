var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const siteControllers = require('../app/controllers/SiteControllers');
const userControllers = require('../app/controllers/UserControllers');
// const requireAuth = require('../app/midleware/login');

// userControllers





///LOGIN
router.get('/login',  userControllers.login);
router.post('/login', userControllers.postlogin);
// phần chưa xử lý trong trang danh sách đăng ký
router.put('/:id/xuly',userControllers.xuly);
router.post('/search',userControllers.search);
router.get('/danhsach_dk',userControllers.danhsach_dk);
///update_password
router.put('/update_password', userControllers.update_password);
// /password_admin
router.get('/password_admin', userControllers.password_admin);
// khuyen mai
router.get('/promotions', userControllers.promotions);
router.get('/promotion', userControllers.promotion);
router.get('/phone', userControllers.phone);
// /{{this._id}}/edit_phone?_method=PUT
router.get('/:id/edit_phone', userControllers.edit_phone);
///{{edit_promotion._id}}/update_phone?_method=PUT
router.put('/:id/update_phone', userControllers.update_phone);
// /store_promotions
router.post('/store_promotions', userControllers.store_promotions);
// /{{this._id}}/edit_promotions?_method=PUT
router.get('/:id/edit_promotions', userControllers.edit_promotions);
///{{edit_promotion._id}}/update_promotions?_method=PUT
router.put('/:id/update_promotions', userControllers.update_promotions);
/// delete_promotions
router.delete('/:id/delete_promotions', userControllers.delete_promotions);
//hiển thị trang danh sách đăng ký

//hiển thị trang gói cước doanh nghiệp
router.get('/goicuocdoanhnghiep', userControllers.goicuocdoanhnghiep);
//hiển thị trang gói cước gia đình
router.get('/goicuocgiadinh', userControllers.goicuocgiadinh);
//hiển thị trang combo
router.get('/combo', userControllers.combo);


// hiển thị trang sửa doanh nghiệp
router.get('/:id/edit_doanhnghiep', userControllers.edit_doanhnghiep);
router.put('/:id/update_goicuocdoanhnghiep', userControllers.update_goicuocdoanhnghiep);
router.delete('/:id/delete_goicuocdoanhnghiep', userControllers.delete_goicuocdoanhnghiep);
// hiển thị trang thêm doanh nghiệp
router.get('/create_doanhnghiep', userControllers.create_doanhnghiep);
// thêm gói cước doanh nghiệp
router.post('/store_goicuocdoanhnghiep', userControllers.store_goicuocdoanhnghiep);




// trang danh sách đăng ký
router.delete('/:id/delete_dsdk', userControllers.delete_dsdk);



// trang goi cuoc gia dinh
router.get('/create_giadinh', userControllers.create_giadinh);
router.post('/store_goicuocgiadinh', userControllers.store_goicuocgiadinh);
// /{{this._id}}/edit_giadinh
router.get('/:id/edit_giadinh', userControllers.edit_giadinh);
//  /{{edit_giadinh._id}}/update_goicuocgiadinh
router.put('/:id/update_goicuocgiadinh', userControllers.update_goicuocgiadinh);
router.delete('/:id/delete_goicuocgiadinh', userControllers.delete_goicuocgiadinh);

// trang combo 
router.get('/create_combo', userControllers.create_combo);
// /store_combo
router.post('/store_combo', userControllers.store_combo);
// /{{this._id}}/edit_combo
router.get('/:id/edit_combo', userControllers.edit_combo);
// /{{edit_combo._id}}/update_combo
router.put('/:id/update_combo', userControllers.update_combo);
router.delete('/:id/delete_combo', userControllers.delete_combo);




// siteControllers



router.post('/store', siteControllers.store);
router.get('/internet', siteControllers.internet);
router.get('/internet_combo', siteControllers.internet_combo);
router.get('/internet_giadinh', siteControllers.internet_giadinh);
router.get('/', siteControllers.index);




module.exports = router;