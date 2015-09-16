var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
	  // if its a new list
	  var newTail = Node(value);
		// if its a new list
	  if(!list.head) {
		  list.head = newTail;
	  }
	  // if the list already has a tail
	  if (list.tail) {
		  // if the list exists
		  list.tail.next = newTail;
	  }

	  list.tail = newTail;
  };

  list.removeHead = function(){
	  if(list.head === null) {
		  return null;
	  }
	  var currentHead = list.head;
	  list.head = list.head.next;
	  return currentHead.value;
  };

  list.contains = function(target){
		var recursiveSearch = function(node, match) {
			if(node.value === match) {
				return true;
			}
			if(node.next === null) {
				return false;
			}
			return recursiveSearch(node.next, match);
		};

	  return recursiveSearch(list.head, target);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addtoTail is constant

// removeHead = constant

// contains: linear