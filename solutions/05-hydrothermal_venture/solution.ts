const fs = require('fs');
const { performance } = require('perf_hooks');

const startTime1 = performance.now();
const solution1 = runSolution1();
const endTime1 = performance.now();
console.log(`Solution: ${solution1}`);
console.log(`Solution took ${endTime1 - startTime1} ms.`);

const startTime2 = performance.now();
const solution2 = runSolution2();
const endTime2 = performance.now();
console.log(`Solution: ${solution2}`);
console.log(`Solution took ${endTime2 - startTime2} ms.`);

function getInput(file: string) {
  return fs.readFileSync(file, 'utf8');
}

function parseInput(data: string) {
  return data.split('\n').map((pipeArrow) => pipeArrow.split(' -> '));
}

function runSolution1() {
  const file = `${__dirname.replace('\\solutions\\', '\\problems\\')}\\input.txt`;
  const rawInputData = getInput(file);
  const parsedInputData = parseInput(rawInputData);
  console.log(parsedInputData);

  return findOverlappedPipeLocations(parsedInputData, true);
}

function runSolution2() {
  const file = `${__dirname.replace('\\solutions\\', '\\problems\\')}\\input.txt`;
  const rawInputData = getInput(file);
  const parsedInputData = parseInput(rawInputData);
  console.log(parsedInputData);

  return findOverlappedPipeLocations(parsedInputData, false);
}

function findOverlappedPipeLocations(parsedInputData: string[][], ignoreDiagonalPipes: boolean) {
  let pipeLocMap: Map<string, number> = new Map();

  for (let pipe of parsedInputData) {
    const pipeStart = pipe[0].split(',');
    const pipeEnd = pipe[1].split(',');

    if (isPipeHorizontal(pipe)) {
      const min = Math.min(parseInt(pipeStart[0]), parseInt(pipeEnd[0]));
      const max = Math.max(parseInt(pipeStart[0]), parseInt(pipeEnd[0]));
      for (let currX = min; currX <= max; currX++) {
        const key = `${currX},${pipeStart[1]}`;
        if (pipeLocMap.has(key)) {
          pipeLocMap.set(key, pipeLocMap.get(key) + 1);
        } else {
          pipeLocMap.set(key, 1);
        }
      }
    } else if (isPipeVertical(pipe)) {
      const min = Math.min(parseInt(pipeStart[1]), parseInt(pipeEnd[1]));
      const max = Math.max(parseInt(pipeStart[1]), parseInt(pipeEnd[1]));
      for (let currY = min; currY <= max; currY++) {
        const key = `${pipeStart[0]},${currY}`;
        if (pipeLocMap.has(key)) {
          pipeLocMap.set(key, pipeLocMap.get(key) + 1);
        } else {
          pipeLocMap.set(key, 1);
        }
      }
    } else if (!ignoreDiagonalPipes) {
      const slope = getSlope(pipe);
    }
  }

  let count = 0;
  for (let val of pipeLocMap.values()) {
    if (val > 1) {
      count++;
    }
  }
  return count;
}

function isPipeHorizontal(pipe: string[]): boolean {
  let pipeStart = pipe[0].split(',');
  let pipeEnd = pipe[1].split(',');

  return pipeStart[1] === pipeEnd[1];
}

function isPipeVertical(pipe: string[]): boolean {
  let pipeStart = pipe[0].split(',');
  let pipeEnd = pipe[1].split(',');

  return pipeStart[0] === pipeEnd[0];
}

function getSlope(pipe) {}
