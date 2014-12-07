import Ember from 'ember';

export default Ember.Controller.extend({
	generateEmail: function(event) {
		this.store.createRecord('email', {body: event.desc, topic: 'Sprint event'}).save();
	},
	applyEvent: function(event) {
		console.log(this.store.find('game'));
		console.log(event);
	}
});
