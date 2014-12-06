import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	pool: DS.hasMany('task', { async: true })
});
