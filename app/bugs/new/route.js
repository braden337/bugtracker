import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('bug');
  },
  actions: {
    save: function(model) {
      model.save().then(function() {
        console.log('Record saved');
      });
    }
  }
});
