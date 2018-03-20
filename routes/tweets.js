const express = require('express');
const router = express.Router();
const NodeCache = require( "node-cache" );

const config = require('../config')
const Twit = require('twit')
const myCache = new NodeCache();

router.get('/:value', function(req, res, next) {
  const searchParam = `#${req.params.value}`

  myCache.get(searchParam, function( err, value ) {
    if( !err ){
      if(value == undefined) {
          const T = new Twit(config)

          const params = {
            q: `${searchParam}`,
            count: 250
          }

          function getData(err, data, response) {
            res.json(data.statuses);
            myCache.set(searchParam, data.statuses)
          }

          T.get('search/tweets', params, getData)

      } else {
        res.json(value);
      }
    }
  });
});

module.exports = router;
