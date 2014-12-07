import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		generate: function(stage) {
			this.generator.newTask(stage);
		}
	}
});
