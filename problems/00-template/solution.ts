const fs = require('fs');
const path = require('path');

const startTime = performance.now();
const solution = runSolution();
const endTime = performance.now();
console.log(`Solution: ${solution}`);
console.log(`Solution took ${endTime - startTime} ms.`);

function parseInput(file: any) {
  fs.readFile(file, 'utf8', (err, data) => {
    console.log({ err, data });
  });
}

function runSolution() {
  console.log('__dirname:', __dirname);
  const file = new URL('input.txt', __dirname);
  console.log(file);
  const parsedInput = parseInput(file);
}
