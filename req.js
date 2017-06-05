var request = require('request');
var fs = require('fs');

request.get('http://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log(response.headers['content-type'])
    console.log('Response Status Message: ', response.statusMessage);
  })

  .pipe(fs.createWriteStream('./future.jpg'));