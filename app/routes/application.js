import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		return this.get('auth').session();
	}
});
