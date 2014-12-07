import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		prepare: function() {
			var record = this.store.createRecord('game');

			record.set('sprintCount', this.get('config.game.sprintCount'));
			record.set('yearCount', this.get('config.game.yearCount'));
			record.set('creator', this.get('auth.user'));
			record.set('status', 'pending');

			var promises = {
				// devs: this.get('generator').generateGameDevs(),
				project: this.get('generator').generateProject()
			};


			return Ember.RSVP.hash(promises)
				.then(function(hash) {
					// record.get('devPool').addObjects(hash.devs);
					record.get('projects').addObject(hash.project);

					return record.save().then(function(game) {
						return this.transitionToRoute('/new/' + game.id);
					}.bind(this));
				}.bind(this), function(reason) {
					console.error(reason.message);
				}.bind(this));
		}
	}
});
