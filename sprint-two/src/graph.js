

var Graph = function(){
	this._nodes = {};
	return this;
};

Graph.prototype.addNode = function(node){
	this._nodes[node] = {};
};

Graph.prototype.contains = function(node){
	var found = false;
	for (var key in this._nodes) {
		if (key === node) {
			found = true;
			return found;
		}
	}
	return found;
};

Graph.prototype.removeNode = function(node) {
		for(var key in this._nodes) {
			if(key === node) {
				delete this._nodes[key];
			}
		}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return ( ( this._nodes[fromNode][toNode] && this._nodes[toNode][fromNode] ) ? true : false );
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if(this._nodes[fromNode] && this._nodes[toNode]) {
		this._nodes[fromNode][toNode] = true;
		this._nodes[toNode][fromNode] = true;
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if(this._nodes[fromNode][toNode] && this._nodes[toNode][fromNode]) {
		this._nodes[fromNode][toNode] = false;
		this._nodes[toNode][fromNode] = false;
	} else {
		throw new Error ('There is no edge');
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this._nodes, function(element, index) {
		cb(index);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1) constant
 * contains: O(n) linear
 * addEdge: O(1) constant
 * hasEdge: O(1) constant
 * removeEdge: O(1) constant
 * forEachNode: O(n) linear
 *

 */



