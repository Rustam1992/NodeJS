const operation = process.argv[0];
const appPath = process.argv[1];

module.exports=function add (operator1,operator2) {
    if (operation === 'add') {
        console.log(operation + ' is '
            + (operator1 + operator2));
    }
}
module.exports=function subtract (operator1,operator2) {
    if (operation === 'subtract') {
        console.log(operation + ' is '
            + (operator1 - operator2));
    }
}
module.exports=function multiply (operator1,operator2) {
    if (operation === 'multiply') {
        console.log(operation + ' is '
            + (operator1 * operator2));
    }
}
module.exports=function divide (operator1,operator2) {
    if (operation === 'divide') {
        console.log(operation + ' is '
            + (operator1 / operator2));
    }
}
const {add} =require('./add.js');
const {divide} =require('./divide.js');
const {multilply} =require('./multilply.js');
const {substract} =require('./substract.js');
const operator1 = process.argv[2];
const operator2 = process.argv[3];
const appPath = process.argv[1];

add(operator1,operator2);
divide(operator1,operator2);
multilply(operator1,operator2);
substract(operator1,operator2);


