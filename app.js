var express = require('express');

//用于处理目录的对象,提高开发效率
var path = require('path');
//用户加载图标
var favicon = require('serve-favicon');
//在控制台中，显示req请求的信息
var logger = require('morgan');
//加载cookie模块，用于获取web浏览器发送的cookie中的内容
var cookieParser = require('cookie-parser');
//解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//生成一个express实例 app
var app = express();

// view engine setup
//设置VIEWS文件夹，__dirname是node.js里面的全局变量。取得执行js所在的路径
app.set('views', path.join(__dirname, 'views'));
// 视图引擎设置
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// 定义icon图标，参数为图标的路径。如果不指明，则用默认的express图标
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//加载日志中间件，定义日志和输出级别
app.use(logger('dev'));
//加载解析json的中间件,接受json请求
app.use(bodyParser.json());
//加载解析urlencoded请求体的中间件
app.use(bodyParser.urlencoded({ extended: false }));
//加载解析cookie的中间件
app.use(cookieParser());
//静态文件目录设置,设置public文件夹为存放静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));

//路由控制器
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler捕获404错误，并转发到错误处理器
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// 开发环境下的500错误处理器，将错误信息渲染error模版并显示到浏览器中
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//导出app实例供其他模块调用
module.exports = app;
