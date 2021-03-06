import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('bug', params.id);
  },
  actions: {
    delete: function(model) {
      var router = this;
      this.store.findRecord('bug', model.id).then(function(bug) {
        bug.deleteRecord();
        bug.save();
        router.transitionTo('bugs');
      });
    }
  }
});
