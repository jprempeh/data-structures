var Queue = function(){
	var instance = {},
	start = -1,
	storage = {},
	end = -1;

	instance.dequeue = function() {
		instance.size() && start++;
		var result = storage[start];
		delete storage[start];
		return result || 'the queue is empty!';
	};

	instance.enqueue = function(string) {
		end++;
		storage[end] = string;
		return string;
	};

	instance.size = function() {
		return end - start;
	};

	return instance;
};

var myHoes = new Queue();

console.log(myHoes.enqueue('Aui'));
console.log(myHoes.enqueue('Fon'));
console.log(myHoes.enqueue('Hwawa'));
console.log(myHoes.enqueue('Dew'));
console.log(myHoes.enqueue('Rain'));
console.log(myHoes.size());
console.log(myHoes.dequeue());
console.log(myHoes.dequeue());
console.log(myHoes.dequeue());
console.log(myHoes.dequeue());
console.log(myHoes.dequeue());
console.log(myHoes.dequeue());
console.log(myHoes.size());
console.log(myHoes);