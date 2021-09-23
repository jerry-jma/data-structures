class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.currFirst = 0;
    this.tempResult;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  dequeue() {
    this.tempResult = this.storage[this.currFirst];
    delete this.storage[this.currFirst];
    this.currFirst++;
    return this.tempResult;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var instance = new Queue();


// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Explicitly declare a class method named constructor
// Declare all other class methods within the class declaration