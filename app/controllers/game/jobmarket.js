import Ember from 'ember';

export default Ember.ArrayController.extend({
	itemController: 'game.dev',

	needs: 'game/employees',
	team: Ember.computed.alias("controllers.game/employees"),

	emptySlots: function() {
		return this.get('config.game.devSlots') - this.get('team.length');
	}.property('controllers.game/employees.content.@each')
});
