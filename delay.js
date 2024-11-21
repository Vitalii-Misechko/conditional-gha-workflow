const { argv } = require('node:process');

let duration = 1 * 60 * 1000; // 1 minute
duration = duration * 1;
duration = duration * 1;
duration = duration * 5;

(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
})()