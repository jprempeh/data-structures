var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
	  // if its a new list
	  if(!list.tail) {
		  var instance = Node(value);
		  list.head = instance;
		  list.tail = instance;
	  } else {
		  // if the list exists
		  list.tail.next = Node(value);
			list.tail = list.tail.next;
		  //list.tail = Node(value);
	  }
  };

  list.removeHead = function(){
	  var temp = list.head.value;
	  list.head = list.head.next;
	  return temp;
  };

  list.contains = function(target){
	  for(var key in list) {
		  if(list[key].value === target) {
			  return true;
		  }
	  }
	  return false;
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

// linear