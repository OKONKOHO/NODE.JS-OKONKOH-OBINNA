const fs = require('fs');

// Asynchronous readFile
fs.readFile('/path/to/file', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous readFile
const data = fs.readFileSync('/path/to/file');
console.log(data);
