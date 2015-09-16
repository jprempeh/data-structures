'use strict';

var Stack = function() {
	this.index = 0;
	this.storage = {};
};

Stack.prototype.pop = function() {
	if(this.size()) {
		var temp = this.storage[this.index];
		delete this.storage[this.index];
		this.index--;
		return temp;
	}
};

Stack.prototype.push = function(value) {
	this.index++;
	this.storage[this.index] = value;
};

Stack.prototype.size = function() {
	return this.index;
};


