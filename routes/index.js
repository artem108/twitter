var express = require('express');
var router = express.Router();

var Twit = require('twit')
var config = require('../config')

// var T = new Twit(config)
//
// var params = {
//     q: '#rainbow',
//     count: 15
//   }
//
// function getData(err, data, response) {
//   var tweets = data.statuses
//
// }
// T.get('search/tweets', params, getData)


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


// var tweet = {
//   status: ''
// }
// function tweeted(err, data, response) {
// console.log(data);
// }
// T.post('statuses/update', tweet, tweeted)

/* GET home page. */
