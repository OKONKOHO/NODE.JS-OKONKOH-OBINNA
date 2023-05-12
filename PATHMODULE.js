const path = require('path');

const filePath = '/path/to/file.txt';

console.log('Directory name:', path.dirname(filePath));
console.log('File name with extension:', path.basename(filePath));
console.log('File extension:', path.extname(filePath));
