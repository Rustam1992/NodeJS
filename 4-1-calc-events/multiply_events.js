const EventEmmiter = require('events');
const multiplyEmmiter = new EventEmmiter();
const operation = process.argv[0];

module.exports = multiplyVal = (arg1, arg2) => {
    if (operation == 'multiply') {
        multiplyEmmiter.emit('connected', 'connection is happened', arg1 * arg2);
    } else {
        multiplyEmmiter.on('error', (err) => {
            console.log(`Не верные данные: ${err.message}`)
            multiplyEmmiter.emit('error', new Error('значение не цифра'))
        });
    }
}
multiplyEmmiter.on('connected', multiplyVal)
