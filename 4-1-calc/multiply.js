const operation = process.argv[0];


module.exports=function multiply (operator1,operator2) {
    if (operation === 'multiply') {
        console.log(operation + ' is '
            + (operator1 * operator2));
    }
}