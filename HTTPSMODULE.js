const https = require('https');
https.get('https://www.google.com/', (res) => {
  console.log('statusCode:', res.statusCode); // prints the status code of the response
  console.log('headers:', res.headers); // prints the headers of the response
});
