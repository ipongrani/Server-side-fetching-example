var createError = require('http-errors');
var express = require('express');
let app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let axios = require('axios');
let Mongo = require('mongodb-bluebird');



//route init
let Registration = require('./routes/Registration')(express,axios);
let Login = require('./routes/Login')(express,axios);
let User = require('./routes/User')(express,axios);
let Index = require('./routes/Index');


// DOTENV ---------------------
const dotenv = require('dotenv');
dotenv.config();
//-----------------------------


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/', Index);
app.use('/Registration', Registration);
app.use('/Login', Login);
app.use('/User', User);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
