var test = require('tape-catch');
var raf = require('./index');

test('Works', function (is) {
  is.plan(3);

  var executed = false;

  raf(function () {
    executed = true;
    is.pass('executes the callback');
  });

  is.notOk(executed,
    'doesn’t execute the callback synchronously'
  );

  setTimeout(function () {
    is.ok(executed,
      'executes the callback after ca 1/60 s'
    );
  }, 1000/60 + 50);
});
