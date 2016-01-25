import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('bug');
  },
  actions: {
    // addBug: function() {
    //   var store = this.store;
    //   var bug = store.createRecord('bug', {
    //     title: 'Demo title',
    //     description: 'Demo description'
    //   });
    //   bug.save().then(console.log('record saved'));
    // },
    // deleteAll: function() {
    //   var store = this.store;
    //   var router = this;
    //   store.findAll('bug').then(function(bugs) {
    //     bugs.forEach(function(bug) {
    //       bug.deleteRecord();
    //       (bug.get('isDeleted') ? console.log('record deleted') : console.log('something went wrong, nothing deleted'));
    //       bug.save();
    //       router.transitionTo('bugs');
    //     });
    //   });

    //   // this.store.query('bug', { title: 'Demo bug' }).then(function(villo) {
    //   //   villo.forEach(function(bug) {
    //   //     console.log(bug.get('title'));
    //   //   });
    //   // });

    // }
  }
});
