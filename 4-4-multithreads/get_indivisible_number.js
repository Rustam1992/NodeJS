const { parentPort, workerData } = require('worker_threads');
module.exports = function indivisible_number(n) {
  
    if (n % 3 == 0) {
        return 0;
    }

}