const fs = require('fs');

const path = process.argv[2];
const fileType = process.argv[3];

fs.readdir(path, 'utf-8', (err, data) => {
	if(err)
		return console.log(err);	
	data.forEach(x => {
		if(x.endsWith('.'+fileType))
			console.log(x);
		})
});
