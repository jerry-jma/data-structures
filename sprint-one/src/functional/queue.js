var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  var currentFirstIndex = 1;

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    // we should store the value being dequeue next
    // each time we dequeue a value,
    // we update the currentFirstIndex;
    // return the value being dequeued next
    var temp = storage[currentFirstIndex];
    delete storage[currentFirstIndex];
    currentFirstIndex++;
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue
