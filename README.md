# memory-luck

**Memory Analysis & Debugging Library**

[![Downloads](https://badgen.net/npm/dw/memory-luck)](https://www.npmjs.com/package/memory-luck)


[![NPM version](https://img.shields.io/npm/v/memory-luck.svg)](https://www.npmjs.com/package/memory-luck)

[![Socket Badge](https://badge.socket.dev/npm/package/memory-luck/0.1.0)](https://badge.socket.dev/npm/package/memory-luck/0.1.0)
[![Socket Badge](https://badgen.net/npm/license/memory-luck)](https://www.npmjs.com/package/memory-luck)

## why ?

When you are optimizing Node.js application performance & memory, you will need an analyzing tool or library. You can use a tool like **memory-luck**, or any other tool you need

## Installation 📥

**Use Npm :-**

```bash
npm install memory-luck -D
```
**Use Yarn:-**

```bash
yarn add memory-luck --dev
```

## Example 🥸

run & anlays this code

```javascript
import {autoAnlays} from '../dist/index.js';

function workCheck(){
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
workCheck()
```

## Methods ⚙️

- autoAnlays(delay,headup) 
  - **delay :(number):-** Defines the time interval in milliseconds between each execution of the analysis.
  - **headup :(number):-** The primary input parameter representing the data or target value to be processed during each analysis cycle.

- manuleAnlays(delay,callback)
  - **callback :(function(nunumber)):-** Process and analyze memory usage manually.

## Issues 🐛

[![GitHub issues](https://img.shields.io/github/issues/Ruwantha-OFFICIAL/memory-luck)](https://github.com/Ruwantha-OFFICIAL/memory-luck/issues)

[![GitHub stars](https://img.shields.io/github/stars/Ruwantha-OFFICIAL/memory-luck?style=social)](https://github.com/Ruwantha-OFFICIAL/memory-luck/stargazers)

> [!WARNING]
> Devloper Depends Only

# OWNER RUWANTHA :shipit: