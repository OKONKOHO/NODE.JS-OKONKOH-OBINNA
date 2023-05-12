const url = require('url');

const urlString = 'https://example.com/search?q=node.js';
const parsedUrl = url.parse(urlString);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
