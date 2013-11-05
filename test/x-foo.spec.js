!function() {

  var controller;

  module('x-foo', {
    setup: function() {
      App.reset();
      controller = App.__container__.lookup('controller:application');
    }
  });

  test('tests running', function() {
    equal(controller.get('foo'), 'foo');
    click('#foo1').then(function() {
      equal(controller.get('foo'), 'hooba!');
    });
  });

}();

