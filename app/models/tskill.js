import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	category: DS.hasMany('tskillcategory', {
		async: true
	}),
	task: DS.belongsTo('task'),
});
