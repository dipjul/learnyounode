// My solution
const fs = require('fs');

module.exports = function(dirName, fType, callback) {
	const path = dirName;
	const fileType = '.' + fType;

	fs.readdir(path, 'utf-8', (err, data) => {
		if(err) return callback(err);
		const newData = data.filter(x => x.endsWith(fileType));
		callback(err, newData);
	});
}

// Official solution
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
	if (err) {
	  return callback(err)
	}

	list = list.filter(function (file) {
	  return path.extname(file) === '.' + filterStr
	})

	callback(null, list)
  })
}
