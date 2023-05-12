const fs = require('fs');

const readStream = fs.createReadStream('/path/to/input.txt');
const writeStream = fs.createWriteStream('/path/to/output.txt');

readStream.pipe(writeStream);
