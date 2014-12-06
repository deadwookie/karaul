import DS from 'ember-data';

export default DS.Model.extend({
	createdDate: function(){
		return (new Date(this.get('createdTimestamp'))).toLocaleString();
	}.property('createdTimestamp'),
	createdTimestamp: DS.attr('number', {
		defaultValue: function() { return new Date(); }
	}),
	msg: DS.attr('string')
});
