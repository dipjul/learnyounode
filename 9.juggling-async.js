// My solution
const http = require('http');
const bl = require('bl');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

http.get(url1, (response) => {
    let body = '';
    response.on('data', (data) => body += data);
    response.on('end', () => {
        console.log(body);
        
        http.get(url2, (response) => {
            body = '';
            response.on('data', (data) => body += data);
            response.on('end', () => {
                console.log(body);

                http.get(url3, (response) => {
                    body = '';
                    response.on('data', (data) => body += data);
                    response.on('end', () => {
                        console.log(body);
                    })
                })
            })
        })
    })
})

// Official solution
'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
