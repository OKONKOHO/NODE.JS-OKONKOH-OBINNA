const dns = require('dns');

dns.lookup('www.example.com', (err, address, family) => {
  console.log('Address:', address);
});
