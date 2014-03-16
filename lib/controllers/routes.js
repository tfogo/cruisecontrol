'use strict';

var path = require('path');

module.exports = function(app, passport, auth) {
    //User Routes
    var users = require('./users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);
    app.get('/users/friends', users.friends);

    //Setting up the users api
    app.post('/users', users.create);

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

 
    //Finish with setting up the userId param
    app.param('userId', users.user);


    app.get('/partials/*', function(req, res) {
        var stripped = req.url.split('.')[0];
        var requestedView = path.join('./', stripped);
        res.render(requestedView, function(err, html) {
            if(err) {
                res.render('404');
            } else {
                res.send(html);
            }
        });
    });

    app.get('/feed', function(req, res) {
        
        res.render('feed', {
            user: req.user ? JSON.stringify(req.user) : 'null'
        });
    });

    app.get('/*', function(req, res) {
        console.log('index! ' + req.user);
        res.render('index', {
            user: req.user ? JSON.stringify(req.user) : 'null'
        });
    });
    
};
