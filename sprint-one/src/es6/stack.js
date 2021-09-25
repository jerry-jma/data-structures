class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.tempResult;
  }
  push(value) {
    this.counter++;
    this.storage[this.counter] = value;
  }
  pop() {
    this.tempResult = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return this.tempResult;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}

var instance = new Stack();




// Work within the src/es6/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Explicitly declare a class method named constructor
// Declare all other class methods within the class declaration