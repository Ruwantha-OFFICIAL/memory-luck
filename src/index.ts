// @ts-ignore 
import gc from 'expose-gc'; 
import chalk from 'chalk';

function GetRam(): number {
  return Number((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2));
}

function caller(headup: number, temp: {val: number}) {
  
    const memory: number = GetRam();
    let ram:string = memory + "MB"
    let plus:string = "▲"
    let mines:string = "▼"

    if(memory - temp.val >= headup){
      console.log(chalk.red(`${plus} [USAGE]: ${ram}`));
    } else if(temp.val - memory >= headup){
      console.log(chalk.yellow(`${mines} [USAGE]: ${ram}`));
    } else if(memory > temp.val){
      console.log(chalk.green(`${plus} [USAGE]: ${ram}`));
    }else if(memory < temp.val){
      console.log(chalk.green(`${mines} [USAGE]: ${ram}`));
    }else{
      console.log(chalk.green(`─ [USAGE]: ${ram}`))
    }
    temp.val = memory; // Update
}

export function autoAnlays(delay: number, headup: number) {
  
  //values limite
  if(1000 >= delay){
    throw new Error('Invalid Delay: Value must be greater than 1000ms');
    return;
  }
  if(typeof headup != "number" || typeof delay != "number"){
    throw new Error('Invalid input: The parameter must be a number.');
    return;
  }
  
  const temp = {val: 0};
  let counter:number = 0;
  setInterval(() => {
    caller(headup, temp);
    if(gc){
      //console.log('gc start')
      gc();
    }
    return;
  }, delay);
}

export function manuleAnlays(delay:number,callback:(memory:number)=> void): void{
  
  if(1000 >= delay){
    throw new Error('Invalid Delay: Value must be greater than 1000ms');
    return;
  }
  if(typeof delay != "number"){
    throw new Error('Invalid input: The parameter must be a number.');
    return;
  }
  
  const intervalId = setInterval(() => {
    let memory:number = Number(GetRam());
    callback(memory);
    if(gc){
      gc();
    }
  }, delay);
}
// delay milesconds headup mb 
//autoAnlays(2000, 0.05)

//delay as melisecinds & callback funtion
//manuleLog(2000,(memory)=>{})

