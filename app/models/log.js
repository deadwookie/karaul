import DS from 'ember-data';

export default DS.Model.extend({
	createdDate: DS.attr('number'),
	msg: DS.attr('string')
});
