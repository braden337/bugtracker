import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('bug', params.id);
  },
  actions: {
    backToBug: function() {
      window.history.go(-1);
    }
  }
});
