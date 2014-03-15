'use strict';

var mongoose = require('mongoose');

exports.mongoose = mongoose;

// Configure for possible deployment
if (process.env.NODE_ENV === 'production') {
    var uristring = 'mongodb://nodejitsu:32792bef656d2dbd06e1547695338401@paulo.mongohq.com:10080/nodejitsudb8442714991'
} else {
    var uristring =
        process.env.MONGOLAB_URI ||
        process.env.MONGOHQ_URL ||
        'mongodb://localhost/test';
}

var mongoOptions = { db: { safe: true } };

// Connect to Database
exports.db = mongoose.connect(uristring, mongoOptions, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + uristring);
  }
});
