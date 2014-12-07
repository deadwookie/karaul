import Ember from 'ember';

export default Ember.Object.extend({
	store: null,
	config: null,

	newDev: function() {},

	newTask: function() {
		console.warn('generator', this.get('config.skill.max'));

		debugger;

		return this.store.find('task', 'task1')
			.done(function() {
				console.info('task1 done');
				console.warn(arguments);
			});
	}
});
