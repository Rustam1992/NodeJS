import { addVal } from './add_events.cjs';
import { divideVal } from './divide_events.js';
import { multiplyVal } from './multiply_events.js';
import { substractVal } from './substract_events.js';

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const operation = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
let answ = operation;
function getVal(){
    if (answ == "add") {
        emitter.addListener(answ, addVal(arg1, arg2));
    }if (answ == "divide") {
        emitter.addListener(answ, divideVal(arg1, arg2));
    }if (answ == "multiply") {
        emitter.addListener(answ, multiplyVal(arg1, arg2));  
    }if (answ == "substract") {
        emitter.addListener(answ, substractVal(arg1, arg2));
    }
    emitter.emit(answ);
}

emmitter.emit(getResult);
try {
    console.log('результат операции' + getResult(operation, arg1, arg2));
} catch (error) {
    console.log(error.message);
}
