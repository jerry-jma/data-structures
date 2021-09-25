var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.currFirst = 0;
  this.tempResult;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  this.tempResult = this.storage[this.currFirst];
  delete this.storage[this.currFirst];
  this.currFirst++;
  return this.tempResult;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var instance = new Queue;


// Work within the src/pseudoclassical/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor