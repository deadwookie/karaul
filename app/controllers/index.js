import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		prepare: function() {
			var record = this.store.createRecord('game');

			// @TODO: get basic game data from config
			// @TODO: generate:
			// -- devpool
			// -- project
			// etc..

			record.set('sprintCount', 40);
			record.set('yearCount', 4);
			record.set('creator', this.get('auth.user'));
			record.get('players').addObject(this.get('auth.user'));

			return record.save().then(function(game) {
				return this.transitionToRoute('/new/' + game.get('id'));
			}.bind(this));
		}
	}
});
