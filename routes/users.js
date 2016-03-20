var express = require('express');
var userModel = require('../model/user');
//生成一个路由实例
var router = express.Router();
//用户注册 当用户通过get方法请求 /users/reg的时候，执行此回调
router.get('/reg',function(req,res){
  res.render('user/reg');
});
//提交用户注册的表单
router.post('/reg',function(req,res){
  var user = req.body;
  userModel.create(user,function(err,doc){
    if(err){
        res.redirect('back');//返回到上一个页面
    }else{
        res.redirect('/');
    }
  });
});

//用户登录 当用户通过get方法请求 /users/reg的时候，执行此回调
router.get('/login',function(req,res){
  res.render('user/login');
});

//提交用户登录的表单
router.post('/login',function(req,res){
  res.send('login');
});

//退出登录
router.get('/logout',function(req,res){
  res.send('logout');
});

module.exports = router;
