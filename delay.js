const { argv } = require('node:process');

(async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, Number(argv?.[2] || `${3 * 60 * 1000}`));
    })
})()