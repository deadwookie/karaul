import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	// current project stage
	projectStage: DS.attr('string'),
	// project key category (core, social eg)
	keyCategory: DS.attr('string'),
	// current users count
	userCount: DS.attr('number'),
	// current budget
	budget: DS.attr('number'),
	// tasks
	projectTree: DS.hasMany('task', {
		async: true
	}),
	// devs
	employees: DS.hasMany('dev', {
		async: true
	}),
	emails: DS.hasMany('email', {
		async: true
	})
});
