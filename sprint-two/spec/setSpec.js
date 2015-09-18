describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
    set1 = Set();
    set2 = Set()
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

	it('should return false if the property already exists', function () {
		set.add('Rich Homie Quan');
		expect(set.add('Rich Homie Quan')).to.equal(false);
	});

	it('should return the size of the set', function(){
		set.add('preminum gas');
		set.add('house');
		set.add('houston');
		set.remove('houston');
		expect(set.size()).to.equal(2);
	});

  it('should combine two sets into a new set (union)', function(){
    set1.add('Dana');
    set1.add('Veruca');
    set1.add('Amber');
    set2.add('Joe');
    var newSet = set1.union(set2);
    expect(newSet.contains('Joe')).to.equal(true);
    expect(newSet.contains('Amber')).to.equal(true);
  });

  it('should create an intersection', function(){
    set1.add('Dana');
    set1.add('Veruca');
    set1.add('Amber');
    set2.add('Veruca');
    set2.add('Joe');
    var newSet = set1.intersection(set2);
    expect(newSet.contains('Veruca')).to.equal(true);
    expect(newSet.contains('Joe')).to.equal(false);
  });

  it('should create an difference', function(){
    set1.add('Dana');
    set1.add('Veruca');
    set1.add('Amber');
    set2.add('Veruca');
    set2.add('Joe');
    var newSet = set1.difference(set2);
    expect(newSet.contains('Dana')).to.equal(true);
    expect(newSet.contains('Joe')).to.equal(false);
    expect(newSet.contains('Veruca')).to.equal(false);
  });

  it('should return whenther a set is a subset of another set', function(){
    var setA = Set();
    setA.add(1);
    setA.add(2);

    var setB = Set();
    setB.add(1);
    setB.add(2);
    setB.add(3);

    var setC = Set();
    setC.add(2);
    setC.add(3);
    setC.add(4);

    expect(setA.subset(setB)).to.equal(true);
    expect(setA.subset(setC)).to.equal(false);
  })

});
