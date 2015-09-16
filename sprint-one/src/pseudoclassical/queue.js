var Queue = function() {
	this.end = -1;
	this.start = -1;
	this.storage = {};
};


Queue.prototype.enqueue = function(string){
	this.end++;
	this.storage[this.end] = string;
};

Queue.prototype.dequeue = function() {
	if (this.size()) {
		this.start++;
		var temp = this.storage[this.start];
		delete this.storage[this.start];
		return temp;
	}
};

Queue.prototype.size = function() {
	return this.end - this.start;
};