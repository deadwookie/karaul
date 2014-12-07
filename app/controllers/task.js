import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		generate: function() {
			this.generator.newTask();
		}
	}
});
