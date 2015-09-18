describe('Dictionary', function(){
	"use strict";
	var dictionary;

	beforeEach(function(){
		dictionary = new Dictionary;
	});

	it('should have functions called set, remove, has, get, clear', function(){
		expect(dictionary.set).to.be.a('function');
		expect(dictionary.remove).to.be.a('function');
		expect(dictionary.has).to.be.a('function');
		expect(dictionary.get).to.be.a('function');
		expect(dictionary.clear).to.be.a('function');
	});

	it('should get a value', function(){
		dictionary.set('Rich', 'Gang');
		expect(dictionary.get('Rich')).to.equal('Gang');
		expect(dictionary.get('Mobb')).to.equal(undefined);
	});

	it('should clear all items', function() {
		dictionary.set('cool', 'guys');
		dictionary.clear();
		expect(dictionary.size()).to.equal(0);
	})
});