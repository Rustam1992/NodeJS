let notifier = require('node-notifier');

setTimeout(function() {
notifier.notify({
title: 'Timer Alert',
message: 'Your timer is up!',
sound: true
});
}, '0d 0h 1m'); 
