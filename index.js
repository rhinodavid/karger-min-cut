const fs = require('fs');
const path = require('path');
const Graph = require('./Graph');

const exampleAdjList = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf-8' }).split('\n');

const computeMinCut = function computeMinCut(adjList) {
  const g = new Graph();
  adjList.forEach((line) => {
    line.split('\t').forEach((num, i, coll) => {
      if (i === 0) {
        g.addNode(num);
      } else if (coll[0] < num) {
        g.addEdge(coll[0], num);
      }
    });
  });

  while (g.nodes.length > 2) {
    g.fuseNodes();
  }
  return g.edges.length;
};

let trials = 0;
let minCut = Infinity;

while (1 === 1) {
  trials += 1;
  const trialValue = computeMinCut(exampleAdjList);
  minCut = Math.min(minCut, trialValue);
  console.log(`Trial #: ${trials}\tValue: ${trialValue}\tMin: ${minCut}`);
}
