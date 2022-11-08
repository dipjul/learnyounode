// My solution
'use strict'
const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

const server1 = http.createServer((req, res) => {
    if(req.method !== 'POST')
        res.end('Only accepts POST requests');
    req.pipe(map(data => data.toString().toUpperCase())).pipe(res);
});

server.listen(port);

// Official solution
'use strict'
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
