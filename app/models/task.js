import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tskill: DS.hasMany('tskill', {
  	async: true
  })
});
