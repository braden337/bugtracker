import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bug', params.id);
  },
  actions: {
    displayList: function() {
      this.transitionTo('bugs');
    }
  }
});
