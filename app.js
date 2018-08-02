const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

const apiRouter = require('./routes/api');
const setupAuth = require('./auth');
const apiMailRouter = require('./routes/api/mail');

const flightInfo = require('./routes/api/flightInfo');
const favorites = require('./routes/api/favorites');
const flightList = require('./routes/api/flightList');
const hotels = require('./routes/api/hotels');
const rentals = require('./routes/api/rentals');

dotenv.load();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

setupAuth(app);

app.use('/api', apiRouter);
app.use('/api/mail', apiMailRouter);

app.use('/api/flightInfo', flightInfo);
app.use('/api/favorites', favorites);
app.use('/api/flightList', flightList);
app.use('/api/hotels', hotels);
app.use('/api/rentals', rentals);



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
