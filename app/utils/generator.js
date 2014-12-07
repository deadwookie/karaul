import Ember from 'ember';

export default Ember.Object.extend({
	store: null,
	config: null,

	newDev: function() {},

	newTask: function() {
		return this.store.find('task', 'task1')
			.then(function(task) {
				console.info('task1 done');
				console.warn(task.toJSON());
			});
	}
});
