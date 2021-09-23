var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    /*
    // create a new node with the the input value
    // check if the head is null,
      // point the the head to the that node, point the tail to that node as well
    // otherwise,
      // take the node currently is the tail, and set it's next node to new node,
      // point the tail to the new node
    //
    */
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;

    }
    list.tail = newNode;

  };

  list.removeHead = function() {

  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
