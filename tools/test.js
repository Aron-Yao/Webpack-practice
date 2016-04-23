async function test() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
};

async function run() {
    console.log(new Date());
    await test();
    console.log(new Date());
};

run();
