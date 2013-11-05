window.ns = window.ns || {};

ns.XFooComponent = Ember.Component.extend({

  classNames: ['x-foo'],

  click: function() {
    return this.sendAction('on-clickity-clack', 'hooba!');
  }

});

