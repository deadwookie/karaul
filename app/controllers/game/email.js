import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		generateEvent: function() {
			var event = this.generator.newEvent();
			//console.log(this.needs.get('event'));
			var eventController = this.controllerFor('event');
			eventController.generateEmail(event);
			eventController.applyEvent(event);
		}
	}
});
