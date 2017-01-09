const Graph = function Graph() {
  this.counter = 0; // simple way to label new nodes post fuse
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function addNode(label) {
  this.nodes.push(label);
  this.counter += 1;
};

Graph.prototype.addEdge = function addEdge(nodeA, nodeB) {
  this.edges.push([nodeA, nodeB]);
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

Graph.prototype.fuseNodes = function fuseNodes() {
  const edge = this.edges.splice(getRandomInt(0, this.edges.length - 1), 1, 0)[0];
  const nodeA = edge[0];
  const nodeB = edge[1];
  const fusedNode = this.counter;
  this.counter += 1;
  // remove old nodes from node list
  const aInd = this.nodes.indexOf(nodeA);
  this.nodes.splice(aInd, 1);
  const bInd = this.nodes.indexOf(nodeB);
  this.nodes.splice(bInd, 1);
  // add new combined node
  this.nodes.push(fusedNode);
  // replace references to old nodes in edges list
  for (let i = 0; i < this.edges.length; i += 1) {
    if (this.edges[i][0] === nodeA || this.edges[i][0] === nodeB) {
      this.edges[i][0] = fusedNode;
    }
    if (this.edges[i][1] === nodeA || this.edges[i][1] === nodeB) {
      this.edges[i][1] = fusedNode;
    }
  }
  // remove self loops
  this.edges = this.edges.filter(tgtEdge => tgtEdge[0] !== tgtEdge[1]);
};

module.exports = Graph;
