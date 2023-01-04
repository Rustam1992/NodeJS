const EventEmmiter = require('events');
const myEmmiter = new EventEmmiter();

myEmmiter.on('substract', (a,b)=>{
    myEmmiter.emit('result', a-b)
});
myEmmiter.emit('substract', 1, 2);
myEmmiter.on('result', (`значение ${a-b}`));



myEmmiter.on('error',(err)=>{
    console.log(`Не верные данные: ${err.message}`)
});
myEmmiter.emit('error', new Error('значение не цифра'))
