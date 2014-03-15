'use strict';

var express = require('express'),
    mongoStore = require('connect-mongo')(express),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    path = require('path'),
    config = require('./config'),
    passport = require('passport'),
    fs = require('fs'),
    mongoStore = require('connect-mongo')(express);

/**
 * Express configuration
 */
module.exports = function(app, passport, db) {
  app.configure('development', function(){
    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
    app.set('views', config.root + '/app/views');
  });

  app.configure('production', function(){
    app.use(express.favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/views');
  });

  app.configure(function(){
    app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        
        app.use(express.logger('dev'));
        
        app.enable("jsonp callback");

        //cookieParser should be above session
        app.use(express.cookieParser());

        //express/mongo session storage
        app.use(express.session({
            secret: 'MEAN',
            store: new mongoStore({
                db: db.connection.db,
                collection: 'sessions'
            })
        }));

        //connect flash for flash messages
        app.use(flash());

        //dynamic helpers
        app.use(helpers(config.app.name));
        
        // request body parsing middleware should be above methodOverride
        app.use(express.urlencoded());
        app.use(express.json());
        //app.use(express.bodyParser()); !deprecated!
        app.use(express.methodOverride());
        
        app.use(passport.initialize());
        app.use(passport.session());
        
        // Router needs to be last
        app.use(app.router);
  });

  // Error handler
  app.configure('development', function(){
    app.use(express.errorHandler());
  });
};
