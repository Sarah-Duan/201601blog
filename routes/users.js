var express = require('express');
var router = express.Router();

//当用户访问/的时候执行此回调
//这里的/当前路由下的根目录，不包含一级根目录
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/reg', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
