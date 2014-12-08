import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('game', params.game);
	},

	afterModel: function(model) {
		if (model.get('status') === 'pending') {
			this.transitionTo('/new/' + model.id)
				.then(function() {
					console.info('game isn\'t started yet, please proceed from preparation step');
				});
		}
	}
});
