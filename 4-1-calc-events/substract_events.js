const emitter=require('./event_emmiter_index.js');
function substractVal(operator1, operator2) {
    emitter.emit(`value is `+operator1 - operator2);

}
export { substractVal };
