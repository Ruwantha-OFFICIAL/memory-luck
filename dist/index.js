// @ts-ignore 
import gc from 'expose-gc';
import chalk from 'chalk';
function GetRam() {
    return Number((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2));
}
function caller(headup, temp) {
    const memory = GetRam();
    let ram = memory + "MB";
    let plus = "▲";
    let mines = "▼";
    if (memory - temp.val >= headup) {
        console.log(chalk.red(`${plus} [USAGE]: ${ram}`));
    }
    else if (temp.val - memory >= headup) {
        console.log(chalk.yellow(`${mines} [USAGE]: ${ram}`));
    }
    else if (memory > temp.val) {
        console.log(chalk.green(`${plus} [USAGE]: ${ram}`));
    }
    else if (memory < temp.val) {
        console.log(chalk.green(`${mines} [USAGE]: ${ram}`));
    }
    else {
        console.log(chalk.green(`─ [USAGE]: ${ram}`));
    }
    temp.val = memory; // Update
}
export function autoAnlays(delay, headup) {
    //values limite
    if (1000 >= delay) {
        throw new Error('Invalid Delay: Value must be greater than 1000ms');
        return;
    }
    if (typeof headup != "number" || typeof delay != "number") {
        throw new Error('Invalid input: The parameter must be a number.');
        return;
    }
    const temp = { val: 0 };
    let counter = 0;
    setInterval(() => {
        caller(headup, temp);
        if (gc) {
            //console.log('gc start')
            gc();
        }
        return;
    }, delay);
}
export function manuleAnlays(delay, callback) {
    if (1000 >= delay) {
        throw new Error('Invalid Delay: Value must be greater than 1000ms');
        return;
    }
    if (typeof delay != "number") {
        throw new Error('Invalid input: The parameter must be a number.');
        return;
    }
    const intervalId = setInterval(() => {
        let memory = Number(GetRam());
        callback(memory);
        if (gc) {
            gc();
        }
    }, delay);
}
// delay milesconds headup mb 
//autoAnlays(2000, 0.05)
//delay as melisecinds & callback funtion
//manuleLog(2000,(memory)=>{})
//# sourceMappingURL=index.js.map