var Tree = function(value) {
  var newTree = {};
  // use extend to copy over the treeMethods properties
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  // newTree.children = null;  // fix me
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  /*
  make a new node var that using Tree Constructor
  use this.push the new node
  */
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  /*
    base case -- if this.value is equal target
      // return true;
    recursive case -- otherwise
      if this.children.length > 0
        loop over this.children
          // return this.children@i.contains(target)
          otherwise,
      return false
  */
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
