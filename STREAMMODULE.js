const fs = require('fs');
const readStream = fs.createReadStream('file.txt', 'utf8');
readStream.on('data', (chunk) => {
  console.log(chunk); // prints a chunk of data from file.txt
});
