const zlib = require('zlib');
const buffer = Buffer.from('Hello World!');
zlib.deflate(buffer, (err, compressed) => {
  if (err) throw err;
  console.log(compressed); // prints the compressed data
  zlib.inflate(compressed, (err, decompressed) => {
    if (err) throw err;
    console.log(decompressed.toString()); // prints 'Hello World!'
  });
});
