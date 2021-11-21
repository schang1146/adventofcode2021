const fs = require('fs');
// const path = require('path');
const { performance } = require('perf_hooks');
const { URL } = require('url');
const startTime = performance.now();
const solution = runSolution();
const endTime = performance.now();
console.log(`Solution: ${solution}`);
console.log(`Solution took ${endTime - startTime} ms.`);
function getInput(file) {
    return fs.readFileSync(file, 'utf8');
}
function parseInput(data) { }
function runSolution() {
    const file = `${__dirname}/input.txt`;
    const rawInputData = getInput(file);
    const parsedInputData = parseInput(rawInputData);
}
//# sourceMappingURL=solution.js.map