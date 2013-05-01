require('../index');
var test = require('tape');

test('JS-Hash', function(t) {	
	var hash = hashUtils.Hash({'a': 'yes!', 'b': 'no!'})
	, post;
	
	t.plan(14);
	t.equal(hash.each().length, hash.getLength());
	
	hash.set('c', '123');
	t.equal(hash.get('c'), '123');
	
	t.equal(hash.get('b'), 'no!');
	hash.remove('b');
	t.equal(hash.get('b'), undefined);
	
	t.equal(hash.post()['a'], hash.get('a'));	

	hash.post({'d': 6, 'e': 12 });
	t.equal(hash.get('d'), 6);
	t.equal(hash.contains('a'), false);
	
	t.equal(hash.contains('d'), true)
	t.equal(hash.get(hash.keys()[0]), hash.first());
	
	hash.update({'another': 'maybe', 'and-another': 'maybe-not'});
	t.equal(hash.get('another'), 'maybe');
	t.equal(hash.pick('and-another', 'another')['another'], 'maybe');
	t.equal(hash.pick(['and-another', 'another'])['and-another'], 'maybe-not');
	
	hash.empty();
	t.equal(typeof hash.get('a'), 'undefined');
	hash.restore();
	t.equal(hash.post()['a'], 'yes!');	
	
});

