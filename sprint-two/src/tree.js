var Tree = function(value){
  var newTree = {};
  newTree.value = value;
	extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var extend = function(to, from) {
	for(var key in from) {
		if(from.hasOwnProperty(key)) {
		to[key] = from[key];
		}
	}
};

var treeMethods = {};

treeMethods.addChild = function(value){
	// set value as the target of a node
	var node = Tree(value);
	// add the node as a child of the tree
	this.children.push(node);
};

treeMethods.contains = function(target) {
	// if the array is empty return false
	var found = false;
	var checkChildren = function(node) {
		if (node.value === target) {
			found = true;
			return;
		}
		if(node.children.length > 0) {
			for(var i = 0; i < node.children.length; i++) {
				checkChildren(node.children[i]);
			}
		}
	};
	checkChildren(this);
	return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * extend = linear
 * addChild = constant O(n)
 * contains = linear O(1)
 */
