import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('game', params.game);
	},

	afterModel: function(model) {
		if (model.get('status') === 'started') {
			this.transitionTo('/game/' + model.id)
				.then(function() {
					console.info('game is already started, go play or watch');
				});
		}
	}
});
