var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    // if the value at count is not defined,
    // no popping will be allowed

    // else,
    // we delete the most recently added item, which is the value at count
    // decrement the counter by 1
    var temp;
    if (storage[count] === undefined) {
      count = 0;
    } else {
      temp = storage[count];
      delete storage[count];
      count--;
      return temp;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
