import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	projectStage: DS.attr('string'),
	keyCategory: DS.attr('string'),
	userCount: DS.attr('number'),
	budget: DS.attr('number'),
	employees: DS.hasMany('dev', {
		async: true
	}),
	emails: DS.hasMany('email', {
		async: true
	})
});
