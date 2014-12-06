import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		play: function() {
			var record = this.store.createRecord('game');

			// @TODO: get basic game data from config
			// @TODO: generate:
			// -- devpool
			// -- project
			// etc..
			record.setProperties({
				sprintCount: 40,
				yearCount: 4
			});

			return record.save().then(function(game) {
				return this.transitionToRoute('/new/' + game.get('id'));
			}.bind(this));
		}
	}
});
