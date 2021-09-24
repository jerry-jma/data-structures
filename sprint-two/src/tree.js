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
  create new variable called found, set it to false

  if tree.value === target
    return true

  if tree.children.length > 0
    for each child
      if child.contains(value)
        set found to true

  return found
*/
  var found = false;

  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    this.children.forEach(function(value) {
      if (value.contains(target)) {
        found = true;
      }
    });
  }

  return found;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


