// My solution
'use strict'
const http = require('http');
const fs = require('fs');
const { Server } = require('http');

const port = Number(process.argv[2]);
const path = process.argv[3];


const server1 = http.createServer((req, res) => {
    fs.createReadStream(path).pipe(res);
});

server.listen(port);

// Official solution
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
