import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		play: function() {
			this.get('model.players').addObject(this.get('auth.user'));
			this.get('model').set('status', 'started');

			return this.get('model').save()
				.then(function(game) {
					return this.transitionToRoute('/play/' + game.id);
				}.bind(this));
		}
	}
});
