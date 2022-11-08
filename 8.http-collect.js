// My solution
const http = require('http');

http.get(process.argv[2], (response) => {
    let body = '';
    response.on('data', (data) => body += data);
    response.on('end', () => {
        console.log(body.length);
        console.log(body);
    }).on('error', console.log) 
})

// Official solution
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
