var fs = require('fs')
  , colors = require('colors') // Variety is the spice of life!
  , levelup = require('levelup') // leveldb module. Totally awesome!
  , db = levelup('./example2-db', { encoding: 'json' });

var path = './'

fs.readdir(path, function (err, files) { // Get the directory listing
  if(err) {
    console.log('wat?: fs.readdir() failed!'.red, err);
  } else {
    var batchRequest = [], numFiles = files.length;
    files.forEach( function (filename) { // For each file in the directory...
      fs.stat(path + filename, function (err, stats) { // ... get the stats
        if(err) {
          console.log('Oh no!: fs.stat() failed!'.red, err);
        } else {  // Add another to the batch request and see if we're done
            batchRequest.push({ type: 'put', key: filename, value: stats });
            if (batchRequest.length == numFiles) db.batch(batchRequest,
              function (err) {
                if (err) console.log('Crap!: db.batch() failed!'.red, err);
                db.close();
              }
            );
        }
        return;
      });
      return;
    });
  }
  return;
});

