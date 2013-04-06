var fs      = require('fs')
  , colors  = require('colors') // Variety is the spice of life!
  , levelup = require('levelup') // leveldb module. Totally awesome!
  , async   = require('async')
  , db      = levelup('./example4-db', { encoding: 'json' });

path = "./"

async.waterfall([ 
  function (callback) { 
    fs.readdir(path, callback);
  },
  function (files, callback) { 
    async.map(files, fs.stat, function(err, results) {
      var i, batchRequest = [], numFiles = files.length;
      for(i = 0; i < numFiles; i++) {
        batchRequest.push({type: 'put', key: files[i], value: results[i]});
      }
      callback(err, batchRequest);
    });
  },
  function (batchRequest, callback) {
    db.batch(batchRequest, callback);
  }
], function(err) {
  if (err) {
    console.log("Oh no! Something went wrong!".red, err);
  }
  db.close();
});