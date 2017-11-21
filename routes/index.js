var express = require('express');
var router = express.Router();
/*生成一个路由实例用来捕获访问主页的GET请求，
导出这个路由并在app.js中通过app.use('/', routes); 加载。
这样，当访问主页时，
就会调用res.render('index', { title: 'Express' });
渲染views/index.jade模版并显示到浏览器中*/

/*关于路由，路由中有两个常用功能：
app.route()函数，创建可链接的途径处理程序的路由路径。
express.Router类，创建模块化安装路径的处理程序。
app.route方法会返回一个Route实例，它可以继续使用所有的HTTP方法，
包括get,post,all,put,delete,head等。*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
