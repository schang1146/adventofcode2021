"use strict";
exports.__esModule = true;
var fs = require('fs');
var performance = require('perf_hooks').performance;
var startTime = performance.now();
var solution = runSolution();
var endTime = performance.now();
console.log("Solution: ".concat(solution));
console.log("Solution took ".concat(endTime - startTime, " ms."));
function getInput(file) {
    return fs.readFileSync(file, 'utf8');
}
function parseInput(data) {
    return data.split('\r\n');
}
function runSolution() {
    var file = "".concat(__dirname.replace('\\solutions\\', '\\problems\\'), "\\input.txt");
    var rawInputData = getInput(file);
    var parsedInputData = parseInput(rawInputData);
    console.log(parsedInputData);
}
