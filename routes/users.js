var express = require('express');
var router = express.Router();

var Twit = require('twit')
var config = require('../config')

router.get('/:value', function(req, res, next) {
var T = new Twit(config)

console.log(req.params);
  var params = {
    q: `#${req.params.value}`,
    count: 10
  }

function getData(err, data, response) {
    res.json(data.statuses);
  }

T.get('search/tweets', params, getData)
});

module.exports = router;
