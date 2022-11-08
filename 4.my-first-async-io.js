// My solution
const fs = require('fs');

const path = process.argv[2];
fs.readFile(path, 'utf-8', (err, data) => {
	if(err) return console.log(err);
	console.log(data.split('\n').length-1);
});

// Official solution
'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
	return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})