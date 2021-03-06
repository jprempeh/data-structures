var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
	var i = getIndexBelowMaxForKey(k, this._limit);
	if(this._storage[i]) {
	this._storage[i].push(v);
		} else {
		this._storage[i] = [];
		this._storage[i].push(v)
	}
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
	return this._storage[i];
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage[i] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
