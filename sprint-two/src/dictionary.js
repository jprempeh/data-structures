// similar to ES6 Map class

function Dictionary() {
	"use strict";
	var items = {};
	this.set = function(key, value) {
		items[key] = value;
	};

	this.remove = function(key) {
		if(this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};

	this.has = function(key) { // study
		return key in items;
	};

	this.get = function(key) {
		return this.has(key) ? items[key] : undefined;
	};

	this.clear = function(){
		items = {};
	};

	this.size = function(){
		return Object.keys(items).length;
	};

	this.keys = function() {};

	this.values = function() {
		var values = [];
		for(var key in items) {
			if(items.hasOwnProperty(key)) {
				values.push(items[key]);
			}
		}
		return values;
	};


	return this;
}

