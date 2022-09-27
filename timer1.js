const process = require('process');
let times = process.argv.slice(2);

for (const time of times) {
  const interval = Number(time); // to avoid non-numbers

  if (interval > 0) { // only ding when the process.argv args are a positive integer or 0
    setTimeout(() => {
      process.stdout.write('\x07'); //chime
      console.log(interval);
    }, interval * 1000); // to convert seconds to milliseconds
  }
}

// example usage:
// node timer1.js 10 3 5 15 9

// This will make it beep at:
//     3 seconds
//     5 seconds
//     9 seconds
//     10 seconds
//     15 seconds
