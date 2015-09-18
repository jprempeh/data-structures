var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if(!this.contains(item)) {
		this._storage[item] = item;
		return true;
	}
	return false;
};

setPrototype.contains = function(item){
	//return item in this._storage;
	return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
	if (this._storage[item]) {
		delete this._storage[item];
		return true;
	}
	return false;
};
setPrototype.clear = function(){
	this._storage = {};
	return true;
};

setPrototype.size = function(){
	return Object.keys(this._storage).length;
};

setPrototype.values = function(){
	return Object.keys(this._storage);
};

setPrototype.union = function(set) {
	var newSet = Set();
	var values1 = this.values();
	var values2 = set.values();
	for(var i = 0; i < values1.length; i++){
		newSet.add([values1[i]]);
	}
	for(var i = 0; i < values2.length; i++){
		newSet.add([values2[i]]);
	}
	return newSet;
};

setPrototype.intersection = function(otherSet) {
	var resultSet = Set();
	var values = this.values();
	for(var i = 0; i < values.length; i++) {
		if(otherSet.contains(values[i])) {
			resultSet.add(values[i]);
		}
	}
	return resultSet;
};

setPrototype.difference = function(otherSet) {
	var values = this.values(),
		i,
		valueslength = values.length,
		resultSet = Set();
	for (i = 0; i < valueslength; i++) {
		if(!otherSet.contains(values[i])) {
			resultSet.add(values[i]);
		}
	}
	return resultSet;
};

setPrototype.subset = function(otherSet){
	if(this.size() > otherSet.size()) {
		return false;
	} else {
		var properties = this.values();
		for (var i = 0; i < properties.length; i++) {
			if (!otherSet.contains([properties[i]])) {
				return false;
			}
		}
		return true;
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add: constant O(1)
 * contains: constant O(1)
 * remove: constant O(1)
 * union: linear O(n)
 */
