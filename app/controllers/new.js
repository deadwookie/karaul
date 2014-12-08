import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		play: function() {
			this.get('model.players').addObject(this.get('auth.user'));
			this.get('model').set('status', 'started');

			var promises = {
				devs: this.get('generator').generateGameDevs(),
				project: this.get('generator').generateProject()
			};

			return Ember.RSVP.hash(promises)
				.then(function(hash) {
					this.get('model.devPool').addObjects(hash.devs);
					this.get('model.projects').addObject(hash.project);

					return this.get('model').save()
						.then(function(game) {
							return this.transitionToRoute('/play/' + game.id);
						}.bind(this));
				}.bind(this), function(reason) {
					console.error(reason.message);
				}.bind(this));
		}
	}
});
