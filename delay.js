const { argv } = require('node:process');

const duration = 1 * 30 * 1000; // 30 sec

(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
})()