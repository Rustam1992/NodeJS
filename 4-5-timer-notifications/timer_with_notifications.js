let notifier = require('node-notifier');
const duration = process.argv[0];
if (!isNaN(parseFloat(duration)) && isFinite(duration))
    setTimeout(function () {
        notifier.notify({
            title: 'Timer Alert',
            message: 'Your timer is up!',
            sound: true
        });
    }, duration);
else
    console.log("Не число!");
