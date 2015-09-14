var Queue = function(){
	var instance = {},
	start = -1,
	storage = {},
	end = -1;

	instance.dequeue = function() {
		instance.size() && start++;
		var result = storage[start];
		delete storage[start];
		return result;
	};

	instance.enqueue = function(string) {
		end++;
		storage[end] = string;
	};

	instance.size = function() {
		return end - start;
	};

	return instance;
};