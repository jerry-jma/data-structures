var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create an instance
  // use underscore uxtend method to copy method onto the instance
  // return the instance
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  instance.temp;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  // this object should contain push/pop/size method
  // write out a function for each method
  // push --
  push: function(value) {
    // increment this count value
    // add the value into this storage
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    // store the value that is being deleted next,
    // delete the value;
    // decrement the count
    this.temp = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return this.temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


