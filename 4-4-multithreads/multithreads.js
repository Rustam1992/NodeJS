const { performance } = require('perf_hooks');
const indivisible_number = require("./get_indivisible_number");
const { Worker } = reqiure('worker_threads');
const arr = [];
let count = 0;
const coreSize = 8;
const subArray = [];

function slow() {
    performance.mark('start');
    for (let i = 0; i < 300000; i++) {
        arr.push(i);
        if (indivisible_number(i) == 0) {
            count++;
        }
        performance.mark('end');
        performance.measure('slow', 'start', 'end')
        console.log(performance.getEntriesByName('slow'))
        console.log(count);
        console.log(arr);
    }
    subArray.push(arr.slice((arr.length * coreSize), (arr.length * coreSize) + coreSize));
}

const performanceObserver = new performance.performanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow2'.pop());
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
})
performanceObserver.observe({ entryTypes: ['measure', 'function'] });

function slow2(array) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./get_indivisible_number.js', {
            workerData: {
                array
            }
        });
        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg)
        })
        worker.on('error', (err) => {
            reject(err)
        })
        worker.on('exit', () => {
            console.log('завершил работу');

        })
    })
}
slow();
slow2(subArray);