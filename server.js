'use strict';

// Module dependencies.
var express = require('express'),  
    path = require('path'),
    fs = require('fs'),
    auth = require('./lib/config/middlewares/authorization'),
    passport = require('passport');

var app = express();

// Connect to database
var db = require('./lib/db/mongo').db;

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});

// Populate empty DB with dummy data
require('./lib/db/dummydata');


// Express Configuration
require('./lib/config/express')(app, passport, db);

// Passport Configuration
require('./lib/config/passport')(passport);

// Controllers
var api = require('./lib/controllers/api'),
    routes = require('./lib/controllers/routes');

// Server Routes
//app.get('/api/all', api.all);

// Auth Routes
require('./lib/controllers/auth')(app, passport);

// Angular Routes
require('./lib/controllers/routes')(app, passport, auth);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

// Expose app
exports = module.exports = app;
