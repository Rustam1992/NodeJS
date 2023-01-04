let notifier = require('node-notifier');

setTimeout(function() {
notifier.notify({
title: 'Timer Alert',
message: 'Your timer is up!',
sound: true
});
}, 30000); //30 seconds