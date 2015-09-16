

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
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



