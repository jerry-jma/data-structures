var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create an instance object
  // each instance should have a storage object
  // each instance should have a count variable
  // extend all queueMethods's properties onto the instnce
  //return the isntance object
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  instance.currFirst = 0;
  instance.temp;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {

  // create a function for enqueue, dequeue, size
  // enqueue -- add the input value to the instance storage @ count using this, increase the count
  // dequeue  --  create a result to store the value to be deleted next, then delete the value @ currFirst, then increment currfirst, return resutl
  // size  --  check the length of object keys array
  enqueue: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    this.temp = this.storage[this.currFirst];
    delete this.storage[this.currFirst];
    this.currFirst++;
    return this.temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend  to copy the methods onto the instance


