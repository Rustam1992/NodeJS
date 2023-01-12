const operation = process.argv[0];


module.exports=function substract (operator1,operator2) {
    if (operation === 'substract') {
        console.log(operation + ' is '
            + (operator1 - operator2));
    }
}