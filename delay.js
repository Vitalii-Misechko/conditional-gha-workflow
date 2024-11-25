const { argv } = require('node:process');

const duration = 1 * 20 * 1000; // 20 sec

(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
})()