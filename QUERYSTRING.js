const querystring = require('querystring');

const params = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const queryString = querystring.stringify(params);
console.log(queryString);

const parsedParams = querystring.parse(queryString);
console.log(parsedParams);
