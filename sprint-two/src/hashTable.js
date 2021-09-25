var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tupleArray = [k, v];
  if (this._storage.get(index) === undefined) {
    var newBucket = [];
    newBucket.push(tupleArray);
  } else {
    var bucket = this._storage.get(index); // should give us an array
    // add our tuple to the bucket
    // this._storage.set(index, bucket)
    bucket.push(tupleArray);
    this._storage.set(index, bucket);
  }
  // insert(fox, quick)
  // var index = gethash#('fox', limit)
  // make new tuple [fox, quick]
  // if storage[index] is not an array
  // set storage[index] = []
  // push type to storage[index], which is a bucket array

  // cat --> index 1 --> array[1] = feisty
  // dog --> index 5 -- > array[5] = happy
  // fox --> index 1 -->
  // [__, [ [cat, feisty], [fox, quick] ], __, ___, ___, happy, ___, ___]
  // [__, [ ] , [[fox, quick]] ,  [[], [], []] , ___ , ___]

  /*
  [
    STORAGE

    [ BUCKET [key, value], [key, value], [key, value]]

    [ BUCKET [key, value], [key, value], [key, value]]

    [ BUCKET [key, value], [key, value], [key, value]]

  ]
  */

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


