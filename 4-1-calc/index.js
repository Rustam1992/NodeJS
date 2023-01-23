import {addOperation} from'./calc/add.js'
import {divideOperation}  from'./calc/divide.js'
import {multiplyOperation}  from'./calc/multiply.js'
import {substractOperation}  from'./calc/subtract.js'

const operation = process.argv[2];
const arg1 = Number(process.argv[3]);
const arg2 = Number(process.argv[4])

function getResult() {
    let res = 0;
    switch (operation) {
        case 'add':
            res = addOperation(arg1, arg2);
            break;
        case 'divide':
            res = divideOperation(arg1, arg2);
            break;
        case 'multiply':
            res = multiplyOperation(arg1, arg2);
            break;
        case 'substract':
            res = substractOperation(arg1, arg2);
            break;
        // default:
        //     res = "неверно введены значения"
        //     break;
    }
    return res;
}

try {
    console.log('результат операции' + getResult(operation, arg1, arg2));
} catch (error) {
    console.log(error.message);
}
