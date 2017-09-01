var fs      = require('fs')
  , colors  = require('colors') // Variety is the spice of life!
  , levelup = require('levelup') // leveldb module. Totally awesome!
  , async   = require('async')
  , db      = levelup('./example3-db', { encoding: 'json' });

path = "./"

fs.readdir(path, function (err, files) {
  if (err) {
    console.log('wat?: fs.readdir() failed!'.red, err);
  } else {
    async.each(files, 
      function (filename, callback) {
        fs.stat(filename, function (err, stats) {
          if (err) {
            console.log('Oops!: fs.stat() failed!'.red, err);
            callback(err);
          } else {
            console.log(('Writing ' + filename + ' : ' + stats).green);            
            db.put(filename, stats, callback);
          }
        });
      },
      function (err) {
        if (err) console.log('An error occurred!'.red, err);
        db.close();
      }
    );
  }
});