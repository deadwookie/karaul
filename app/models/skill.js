import DS from 'ember-data';

export default DS.Model.extend({
	value: DS.attr('number'),
	tskills: DS.hasMany('tskill', {
		async: true
	})
});
