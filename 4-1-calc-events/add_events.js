const EventEmmiter = require('events');
const addEmmiter = new EventEmmiter();
const operation = process.argv[0];

module.exports = addVal = (arg1, arg2) => {
    if (operation == 'add') {
        addEmmiter.emit('connected', 'connection is happened', arg1 + arg2);
    } else {
        addEmmiter.on('error', (err) => {
            console.log(`Не верные данные: ${err.message}`)
            addEmmiter.emit('error', new Error('значение не цифра'))
        });
    }
}
addEmmiter.on('connected', addVal)
