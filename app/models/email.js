import DS from 'ember-data';

export default DS.Model.extend({
	body: DS.attr('string'),
	createdDate: function(){
		return (new Date(this.get('createdTimestamp'))).toLocaleString();
	}.property('createdTimestamp'),
	createdTimestamp: DS.attr('number', {
		defaultValue: function() { return new Date(); }
	}),
	isRead: DS.attr('boolean'),
	topic: DS.attr('string'),
	project: DS.belongsTo('project')
});
