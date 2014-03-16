'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

User.remove({}, function(){
    console.log('removed');
});
