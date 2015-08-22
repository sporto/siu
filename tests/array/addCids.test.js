var test  = require('tape-catch');
var SI    = require('seamless-immutable');
var siu   = require('../../index.js');

test('a.addCIds', function (t) {
	var items = SI([{
		id: 1,
		name: 'Sara'
	}]);

	items = siu.a.addCIds(items, 'cid');

	t.ok(items[0].cid != null, "Adds cid");
	t.end();
});

test('raise if not immutable', function(t) {
	var items = [{
		name: 'Sara'
	}];

	function add() {
		siu.a.addCIds(items, 'cid');
	}

	t.throws(add);
	t.end();

});

test('doesnt override', function(t) {
	var items = SI([{
		id: 1,
		cid: 23,
		name: 'Sara'
	}]);

	items = siu.a.addCIds(items, 'cid');

	t.ok(items[0].cid === 23);
	t.end();
});
