import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	salary: DS.attr('number'),
	skills: DS.hasMany('skill', { async: true })
});
