import DS from 'ember-data';

export default DS.Model.extend({
	tasks: DS.hasMany('task', { async: true }),
	devs: DS.hasMany('dev', { async: true }),
	setup: DS.attr('setups')
});
