var express = require('express');
//这是一个路由的实例
var router = express.Router();
router.use(function(req,res,next){
  console.log('user');
  next();
});
//当用户访问/的时候，执行对应的回调函数
router.get('/', function(req, res, next) {
  //用数据渲染模板
  res.render('index', { title: 'Express' });
});

module.exports = router;
