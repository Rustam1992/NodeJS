const { performance } = require('perf_hooks');
const indivisible_number = require("./get_indivisible_number");
const { Worker } = require('worker_threads')

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
        subArray.push(arr.slice((arr.length * coreSize), (i.length * coreSize) + coreSize))
        console.log(performance.getEntriesByName('slow'))
        console.log(count);
        console.log(arr);
    }
}
const performanceObserver = new performance.performanceObserver((items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow2'.pop());
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
})
performanceObserver.observe({ entryTypes: ['measure', 'function'] });

function slow2() {
    performance.mark('start');
    for (let i = 0; i < arr.length / coreSize; i++) {
        const worker = new Worker('./worker.js')
        worker.on('message', (message) => {
            console.log(`Received message from worker: ${message}`);
        });
        worker.postMessage(`Hello from the main thread!`);
    }
    subArray[i] = arr.slice((i * coreSize), (i * coreSize) + coreSize)
}
performance.mark('end');
performance.measure('slow2', 'start', 'end')

slow();
slow2()
