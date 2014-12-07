import Ember from 'ember';

export default Ember.Controller.extend({
	isPlayer: function() {
		return this.get('model.creator.id') === this.get('auth.user.id') || this.get('model.players').contains(this.get('auth.user'));
	}.property('creator', 'players'),

	isCreator: function() {
		return this.get('model.creator.id') === this.get('auth.user.id');
	}.property('creator')
});
