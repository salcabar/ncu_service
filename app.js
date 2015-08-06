var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var preview =  require('./routes/preview');
var pages =  require('./routes/pages');
var message =  require('./routes/message');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    //res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/preview' , preview);
app.use('/pages' , pages);
app.use('/message' , message);
//app.use('/login', routes);
//app.use('/home', routes);



app.use('/tool' , function(req, res, next){
   //res.end('ok')
   res.render("tool",{});
});


app.use('/list' , function(req, res, next){
   console.log('11333')
   //res.end('ok')
   res.render("message",{});
});

app.use('/', function(req, res, next){
  res.render("index",{});
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  if(req.url == '/favicon.ico'){
     next();
  }else{
     res.status(err.status || 500);
     res.render('error', {
      message: err.message,
      error: {}
     });
  }
});


module.exports = app;
