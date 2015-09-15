var Queue = function(){
	var instance = {};
		  instance.storage = {};
			instance.start = -1;
			instance.end = -1;
	extend(instance, queueMethods);

	return instance;
};

var extend = function(to, from) {
	for(var key in from) {
		to[key] = from[key];
	}
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
	this.end++;
	this.storage[this.end] = string;
};

queueMethods.dequeue = function() {
	this.size() && this.start++;
	var temp = this.storage[this.start];
	delete this.storage[this.start];
	return temp;
};

queueMethods.size = function() {
	return (this.end - this.start);
};

var list = Queue();
list.enqueue('foo');
console.log(list.sum())
console.log(list);
list.dequeue();

