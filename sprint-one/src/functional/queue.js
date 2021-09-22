var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  // use a counter to count, each time a new value is added,
  var count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};


// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue
