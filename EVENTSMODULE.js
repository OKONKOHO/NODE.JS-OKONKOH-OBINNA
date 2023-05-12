const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', () => {
  console.log('Event emitted');
});

myEmitter.emit('myEvent');
