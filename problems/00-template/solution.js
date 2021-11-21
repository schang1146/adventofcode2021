var fs = require('fs');
var path = require('path');
var startTime = performance.now();
var solution = runSolution();
var endTime = performance.now();
console.log("Solution: ".concat(solution));
console.log("Solution took ".concat(endTime - startTime, " ms."));
function parseInput(file) {
    fs.readFile(file, 'utf8', function (err, data) {
        console.log({ err: err, data: data });
    });
}
function runSolution() {
    console.log('__dirname:', __dirname);
    var file = new URL('input.txt', __dirname);
    console.log(file);
    var parsedInput = parseInput(file);
}
//# sourceMappingURL=solution.js.map