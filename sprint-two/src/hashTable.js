var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tupleArray = [k, v];
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tupleArray);
  } else {
    var bucket = this._storage.get(index);
    var overwrite = false;
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        overwrite = true;
      }
    }
    if (!overwrite) {
      bucket.push(tupleArray);
    }
  }
  this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    // make a variable that
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Insert: average case constant O(1); worst case O(n)
 * Retrieve: average case constant (1): worst case O(n)
 * Remove: average case constant O(1); worst case O(n)
 */


