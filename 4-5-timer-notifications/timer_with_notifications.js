let notifier = require('node-notifier');
const futureDate = new Date(process.argv[2]);
const delay = futureDate - Date.now();
setTimeout(function() {
notifier.notify({
title: 'Timer Alert',
message: 'Your timer is up!',
sound: true
});
}, delay); 
