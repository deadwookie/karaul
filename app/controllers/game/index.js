import Ember from 'ember';

export default Ember.Controller.extend({
	isPlayer: function() {
		return this.get('model.creator') === this.get('auth.user') || this.get('model.players').contains(this.get('auth.user'));
	}.property('creator', 'players')
});
