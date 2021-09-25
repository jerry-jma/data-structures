var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.tempResult;
};
Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
};
Stack.prototype.pop = function(value) {
  this.tempResult = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter--;
  return this.tempResult;
};
Stack.prototype.size = function(value) {
  return Object.keys(this.storage).length;
};

var instance = new Stack;
// Work within the src/pseudoclassical/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor