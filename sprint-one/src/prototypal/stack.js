var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.counter = 0;
  instance.tempResult;
  return instance;
};

var stackMethods = {
  // add three new properties: push, pop, size;
  push: function(value) {
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function() {
    this.tempResult = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return this.tempResult;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


// Work within the src/protoypal/ folder.
// Use Object.create  with the object from step 2 to create instances of your class