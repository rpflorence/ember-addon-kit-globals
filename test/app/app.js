App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true
});
App.setupForTesting();
App.injectTestHelpers();

App.ApplicationController = Ember.Controller.extend({

  foo: 'foo',

  actions: {
    setFoo: function(val) {
      this.set('foo', val);
    }
  }

});

