const { argv } = require('node:process');

let duration = 1 * 60 * 1000; // 1 minute
duration = duration * 1;
duration = duration * 3;
duration = duration * 1;

(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
})()