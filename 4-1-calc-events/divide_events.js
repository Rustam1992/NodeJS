const EventEmmiter = require('events');
const divideEmmiter = new EventEmmiter();
const operation = process.argv[0];

module.exports =function divideVal(arg1, arg2) {
    if (operation == 'divide') {
        divideEmmiter.emit('connected', 'connection is happened', arg1 / arg2);
    } else {
        divideEmmiter.on('error', (err) => {
            console.log(`Не верные данные: ${err.message}`)
            divideEmmiter.emit('error', new Error('значение не цифра'))
        });
    }
}
divideEmmiter.on('connected', divideVal)
