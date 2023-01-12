const EventEmmiter = require('events');
const substractEmmiter = new EventEmmiter();
const operation = process.argv[0];

module.exports =function substractVal(arg1, arg2) {
    if (operation == 'substract') {
       return substractEmmiter.emit('connected', 'connection is happened', arg1 - arg2);
    } else {
        substractEmmiter.on('error', (err) => {
            console.log(`Не верные данные: ${err.message}`)
            substractEmmiter.emit('error', new Error('значение не цифра'))
        });
    }
}
substractEmmiter.on('connected', substractVal)
