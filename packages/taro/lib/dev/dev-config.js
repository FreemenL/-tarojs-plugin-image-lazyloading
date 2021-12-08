var fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../@ascs');

fs.access(targetFile, fs.constants.F_OK, (err) => {
	console.log(`${targetFile} ${err ? 'not exist' : 'exist'}`);
	if (err) {
		fs.mkdirSync(targetFile);
	} else {
		
	}
});