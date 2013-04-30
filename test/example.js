require('../js-lookup');
require('../index');
var test = require('tape');

test('JS-Hash', function(t) {	
	var hash = new Hash.Table({'a': 'yes!', 'b': 'no!'})
	, post;
	
	t.plan(9);
	t.equal(hash.each().length, 2);
	
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
	t.equal(hash.keys()[0], 'd');
	
});

