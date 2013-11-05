Ember.Application.initializer({

  name: 'x-foo',

  initialize: function(container, application) {
    application.XFooComponent = ns.XFooComponent;
  }

});

