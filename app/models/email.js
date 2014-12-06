import DS from 'ember-data';

export default DS.Model.extend({
	body: DS.attr('string'),
	createdDate: DS.attr('number'),
	isRead: DS.attr('boolean'),
	topic: DS.attr('string')
});
