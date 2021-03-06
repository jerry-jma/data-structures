

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  }

  for (var j = 0; j < this.edges.length; j++) {
    if (this.edges[j].node1 === node || this.edges[j].node2 === node) {
      this.edges.splice(j, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // iterating through the edges
  for (var i = 0; i < this.edges.length; i++) {
    var node1 = this.edges[i].node1;
    var node2 = this.edges[i].node2;
    if ((node1 === fromNode && node2 === toNode) || (node2 === fromNode && node1 === toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = {node1: fromNode, node2: toNode};
  this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    var node1 = this.edges[i].node1;
    var node2 = this.edges[i].node2;
    if ((node1 === fromNode && node2 === toNode) || (node2 === fromNode && node1 === toNode)) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  addNode     : constant O(1)
 *  contains    : linear O(n)
 *  removeNode  : linear O(n)
 *  hasEdge     : linear O(n)
 *  addEdge     : constant O(n)
 *  removeEdge  : linear O(n)
 *  forEachNode : linear O(n)
 */


