import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		prepare: function() {
			var record = this.store.createRecord('game');

			record.set('sprintCount', this.get('config.game.sprintCount'));
			record.set('yearCount', this.get('config.game.yearCount'));
			record.set('creator', this.get('auth.user'));
			record.set('status', 'pending');

			return record.save().then(function(game) {
				return this.transitionToRoute('/play/' + game.id);
			}.bind(this));
		},

		// @TODO: remove. test purpose only
		notify: function() {
			this.notify.info('test');
		}
	}
});
