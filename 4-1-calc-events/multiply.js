const EventEmmiter = require('events');
const myEmmiter = new EventEmmiter();

myEmmiter.on('multiply', (a,b)=>{
    myEmmiter.emit('result', a*b)
});
myEmmiter.emit('multiply', 1, 2);
myEmmiter.on('result', (`значение ${a*b}`));



myEmmiter.on('error',(err)=>{
    console.log(`Не верные данные: ${err.message}`)
});
myEmmiter.emit('error', new Error('значение не цифра'))
