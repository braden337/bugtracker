import Ember from 'ember';

const BugEditorComponent = Ember.Component.extend({
  actions: {
    save: function(model) {
      var component = this;
      model.save().then(function() {
        console.log('Model saved');
        component.sendAction('handleRedirect');
      });
    }
  }
});

BugEditorComponent.reopenClass({
  positionalParams: ['bug']
});

export default BugEditorComponent;





