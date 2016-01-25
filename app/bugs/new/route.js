import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('bug');
  },
  actions: {
    displayList: function() {
      this.transitionTo('bugs');
    }
  }
});
