const { parentPort, workerData } = require('worker_threads');
module.exports = function indivisible_number(n) {
    let count;
    if (n % 3 == 0) {
        return count++;
    }

}