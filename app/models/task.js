import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	reqSkills: DS.hasMany('skill', {
		async: true
	})
});
