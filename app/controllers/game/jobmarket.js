import Ember from 'ember';

export default Ember.ArrayController.extend({
	itemController: 'game.dev',

	needs: 'game/employees',
	team: Ember.computed.alias("controllers.game/employees")
});
