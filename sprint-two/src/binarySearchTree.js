var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

BinarySearchTree.prototype.insert = function(value) {
  var tree = BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === null) {
      this.left = tree;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = tree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  }
  if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */