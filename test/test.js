import {autoAnlays} from '../dist/index.js';

function mk(){
  let up = [];
  const intervalId = setInterval(() => {
    up.push({
      val: Array(5000).fill("luck at"),
      val2:"luck"
    })
  }, 100);
  setInterval(() => {
    //clear up array
    up = [];
  }, 8000);
  autoAnlays(2000,0.05)
}
mk()