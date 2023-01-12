const { addVal } = require('./add_events.js');
const { divide } = require('./divide_events.js');
const { multilply } = require('./multiply_events.js');
const { substract } = require('./substract_events.js');
const appPath = process.argv[1];

const operator1 = process.argv[2];
const operator2 = process.argv[3];


addVal(operator1, operator2);
divide(operator1, operator2);
multilply(operator1, operator2);
substract(operator1, operator2);