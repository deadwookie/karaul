import DS from 'ember-data';

export default DS.Model.extend({
	sprintCount: DS.attr('number'),
	yearCount: DS.attr('number'),
	projects: DS.hasMany('project', {
		async: true
	}),
	sprints: DS.hasMany('sprint', {
		async: true
	}),
	devPool: DS.hasMany('dev', {
		async: true
	}),
	creator: DS.belongsTo('user', {
		async: true
	}),
	players: DS.hasMany('user', {
		async: true
	}),
	status: DS.attr('string')
});
