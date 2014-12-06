import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		play: function() {
			// @TODO: set custom game params, update settings/players/etc...
			return this.transitionToRoute('/play/' + this.get('model.id'));
		}
	}
});
