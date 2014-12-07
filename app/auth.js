import Ember from 'ember';

export default Ember.Object.extend({
	user: void 0,

	session: function() {
		return this.store.find('user', 'user1')
			.then(function(user) {
				console.info('session user:', user && user.toJSON());
				this.set('user', user);
			}.bind(this));
	},

	hasPermission: function() {
		return true;
	},


});
