import DS from 'ember-data';

export default DS.Model.extend({
	category: DS.attr('string'),
	children: DS.hasMany('task',{
		async: true,
		inverse: 'parent'
	}),
	name: DS.attr('string'),
	parent: DS.hasMany('task',{
		async: true,
		inverse: 'children'
	}),
	project: DS.attr('string'),
	requiredProjectState: DS.attr('string'),
	requiredSkills: DS.hasMany('skill', {
		async: true
	}),
});
