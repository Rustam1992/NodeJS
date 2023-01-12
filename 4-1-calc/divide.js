const operation = process.argv[0];
module.exports=function divide (operator1,operator2) {
    if (operation === 'divide') {
        console.log(operation + ' is '
            + (operator1 / operator2));
    }
}
