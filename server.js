var db_reqSlackBot = require('slackbots'); // import slackbot library
var db_reqMongoose = require('mongoose');  // import mongoose library for accessing MongoDB



var http = require('http');
http.createServer((req, res) => {}).listen(1337, '127.0.0.1');
/* Create MongoDB Connection */
db_reqMongoose.Promise = require('bluebird');
db_reqMongoose.connect('mongodb://localhost/slackbot', {useNewUrlParser: true,promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
  