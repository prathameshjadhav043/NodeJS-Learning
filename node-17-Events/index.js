// Event module in node js
// its is inbulid module of eventjs
// where you can create, fire, listen for ypur own event

const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('Pratham', () => {
//     console.log('prathamesh is name')
// })

// event.emit('Pratham');


event.on('checkpage', (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
})

event.emit('checkpage', 200, 'ok');
