var Stack = function() {
	var instance = Object.create(stackMethods);
	instance.index = 0;
	instance.storage = {};
	return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.index++;
	this.storage[this.index] = value;
};

stackMethods.pop = function() {
	if (this.index) {
		var temp = this.storage[this.index];
		delete this.storage[this.index];
		this.index--;
		return temp;
	}
};

stackMethods.size = function() {
	return this.index;
};

stackMethods.peek = function() {
	return this.storage[1];
};