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
    /*
    if the head is null
     // return  undefined
    make a new var for the head value, assign to list.head.value
    point the head to the current next property of the current head
    return that var
    */
    if (list.head === null) {
      return undefined;
    }
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;

  };

  list.contains = function(target) {
    /*
    iterate over the linked list from the head.next
    keep going until we find the target value, or we reach the tail
    we create new var node, assign to the head
    use a while loop to, while (node !== null)
      if node.value equal to target
        return true
      otherwise, node = node.next
    if not found, just return false;
    */

    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
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
