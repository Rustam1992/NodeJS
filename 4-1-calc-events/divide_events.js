const emitter=require('./event_emmiter_index.js');
function divideVal(operator1, operator2) {
    emitter.emit(`value is `+operator1 / operator2);

}
export { divideVal };