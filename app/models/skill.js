import DS from 'ember-data';

export default DS.Model.extend({
	value: DS.attr('number'),
	category: DS.attr('string'),
	tag: DS.attr('string'),
});
