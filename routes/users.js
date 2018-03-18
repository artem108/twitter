var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

module.exports = router;

// router.route('/auth/twitter/reverse')
//   .post(function(req, res) {
//     request.post({
//       url: 'https://api.twitter.com/oauth/request_token',
//       oauth: {
//         oauth_callback: "http%3A%2F%2Flocalhost%3A3000%2Ftwitter-callback",
//         consumer_key: 'KEY',
//         consumer_secret: 'SECRET'
//       }
//     }, function (err, r, body) {
//       if (err) {
//         return res.send(500, { message: err.message });
//       }
//
//
//       var jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
//       res.send(JSON.parse(jsonStr));
//     });
//   });
