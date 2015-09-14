var Queue = function(){
	var instance = {};
	var size = 0;
	var storage = {};
	var last;

	instance.dequeue = function() {
		var temp = storage.first;
		size--;
		storage.first =
		return temp;
	};

	instance.enqueue = function(string) {
		if (size > 0) {
		storage[size] = storage.first;
		storage.first = string;
		size++;
		} else {
			size++;
			storage.first = string;
		}
	};

	instance.size = function() {
		return size;
	};

	return instance;
};