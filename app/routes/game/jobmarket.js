import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		controller.set('content', model.get('devPool'));
		this.controllerFor('game.employees').set('content', model.get('projects.firstObject.employees'));
	}
});
