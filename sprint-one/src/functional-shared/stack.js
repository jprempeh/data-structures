var Stack = function() {
	var instance = {};
	instance.storage = {};
	instance.index = 0;
	extend(instance, stackMethods);
	return instance;
};

var extend = function(to, from) {
	for(var key in from) {
		to[key] = from[key];
	}
};

var stackMethods = {};

stackMethods.push = function(string) {
	this.index++;
	this.storage[this.index] = string;
};

stackMethods.pop = function() {
	if (this.size()) {
	var temp = this.storage[this.index];
	delete this.storage[this.index];
	this.index--;
	return temp;
	} else {
		return null;
	}
};

stackMethods.size = function() {
	return this.index;
};

var list = Stack();
list.push('me');
console.log(list);