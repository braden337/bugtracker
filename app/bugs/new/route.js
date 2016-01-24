import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('bug');
  },
  actions: {
    save: function(model) {
      var router = this;
      model.save().then(function() {
        console.log('Record saved');
      });
      router.transitionTo('bugs.details', model);
    }
  }
});
