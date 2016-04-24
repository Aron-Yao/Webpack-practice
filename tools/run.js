import build from './build';
import boot from './boot';

let args = process.argv;
let moduleNames = process.argv.slice(2);

let modules = {
    'build': build,
    'boot': boot
}

//Execute module according to given argv
let run = async () => {
    moduleNames[0] && await modules[moduleNames[0]]();
    moduleNames[1] && await modules[moduleNames[1]]();
};

run();
