// My solution
'use strict'
const net = require('net');

function zeroes(num) {
    return num < 10 ? '0' + num : num;
}

function getDateTime() {
    const d = new Date();
    return d.getFullYear() + '-'
        + zeroes(d.getMonth() + 1) + '-'
        + zeroes(d.getDate()) + ' '
        + zeroes(d.getHours()) + ':'
        + zeroes(d.getMinutes());
}

const port = Number(process.argv[2]);
const server1 = net.createServer((socket) => {
    socket.end(getDateTime() + '\n');
});

server.listen(port);

// Official solution
'use strict'
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))