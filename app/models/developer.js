import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	avatar: DS.attr('string'),
	salary: DS.attr('number', {defaultValue: 0}),
	
	skills: DS.attr(),

	/**
	 * @returns {number} : 1 -- Junior, 2 -- Middle, 3 -- Senior
	 */
	level: function () {
		return 1;
	}
});
