// My solution
'use strict'
const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);

const server1 = http.createServer((req, res) => {
    if(req.method === 'GET') {
        const body = url.parse(req.url, true).query;
        const path = url.parse(req.url, true).pathname;
        switch (path) {
            case '/api/parsetime':
                res.setHeader('Content-Type', 'application/json;charset=utf-8');
                res.write(getParseTime(body));
                break;
            case '/api/unixtime':
                res.setHeader('Content-Type', 'application/json;charset=utf-8');
                res.write(getUnixTime(body));
                break;
            default:
                res.end('Only /api/parsetime and /api/unixtime');
                break;
        }
        res.end();
    } else {
        res.end('Only GET method with /api/parsetime and /api/unixtime ends accepted');
    }
});

function getParseTime(data) {
    const date = new Date(data['iso']);
    const obj = {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
    }
    return JSON.stringify(obj);
}

function getUnixTime(data) {
    const date = new Date(data['iso']);
    const obj = {
        unixtime: date.valueOf()
    }
    return JSON.stringify(obj);
}

server.listen(port);

// Official solution
'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))