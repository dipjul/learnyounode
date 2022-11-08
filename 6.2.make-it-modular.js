// My solution
const mymodule = require('./6.1.mymodule.js');

const dirName = process.argv[2];
const fileType = process.argv[3];


mymodule(dirName,fileType, (err, data) => {
	if(err) return console.log(err);
	data.forEach(x => console.log(x));
});

// Official Solution

'use strict'
const filterFn = require('./6.1.mymodule.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
	return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
	console.log(file)
  })
})