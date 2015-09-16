// Prototypical inhertiance
var Queue = function() {
	var instance = Object.create(queueMethods);
	instance.start = -1;
	instance.end = -1;
	instance.storage = {};
	return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
	this.end++;
	this.storage[this.end] = string;
};

queueMethods.dequeue = function(){
	this.size() && this.start++;
	var temp = this.storage[this.start];
	delete this.storage[this.start];
	return temp;
};

queueMethods.size = function () {
	return this.end - this.start;
};