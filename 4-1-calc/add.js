const operation = process.argv[0];

module.exports=function add (operator1,operator2) {
    if (operation === 'add') {
        console.log(operation + ' is '
            + (operator1 + operator2));
    }
}
