const operation = process.argv[0];


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



