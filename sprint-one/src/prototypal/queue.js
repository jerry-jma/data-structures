var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.counter = 0;
  instance.tempResult;
  instance.currFirst = 0;
  return instance;
};

var queueMethods = {
  // create a function for enqueue, dequeue, size
  // enqueue -- add the input value to the instance storage @ count using this, increase the count
  // dequeue  --  create a result to store the value to be deleted next, then delete the value @ currFirst, then increment currfirst, return resutl
  // size  --  check the length of object keys array
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    this.tempResult = this.storage[this.currFirst];
    delete this.storage[this.currFirst];
    this.currFirst++;
    return this.tempResult;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

// Work within the src/protoypal/ folder.
// Use Object.create  with the object from step 2 to create instances of your class



