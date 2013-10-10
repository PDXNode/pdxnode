// Anti-pattern

var fs = require('fs')
  , colors = require('colors') // Variety is the spice of life!
  , levelup = require('levelup') // leveldb module. Totally awesome!
  , db = levelup('./example1-db', { encoding: 'json' });

var path = './';

fs.readdir(path, function (err, files) { // Get the directory listing
  if(err) {
    console.log('wat?: fs.readdir() failed!'.red, err);
  } else {
    files.forEach( function (filename) { // For each file in the directory...
      fs.stat(path + filename, function (err, stats) { // ... get the stats
        if(err) {
          console.log('Oh no!: fs.stat() failed!'.red, err);
        } else {
          db.put(filename, stats, function (err) { // Save the filename and its stats
            (err) ? console.log('Crap!: db:put() failed!'.red, err) 
                  : console.log(('Logged stats for ' + filename).green);
            return;
          });
        }
        return;
      });
      return;
    });
  }
  return;
});

setTimeout(function () { db.close(); }, 100); // Wait awhile and hope we're done. BAD!