import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  isActive: DS.attr('boolean', {defaultValue: true}),
  comments: DS.hasMany('comment')
});
