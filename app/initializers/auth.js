import Ember from 'ember';
import Auth from '../auth';

export function initialize(container) {
	container.register('auth:main', Auth);
	container.injection('auth:main', 'store', 'store:main');
	// container.injection('auth:main', 'adapter', 'firebase:login');

	container.injection('route', 'auth', 'auth:main');
	container.injection('controller', 'auth', 'auth:main');

	Ember.Route.reopen({
		beforeModel: function(transition) {
		if (this.get('isAuthRequired') && !this.get('auth.user')) {
			console.warn('auth is required for "%s"', transition.targetName);
			this.get('auth').set('attemptedTransition', transition);
			// TODO: show a "login required" message
			return this.transitionTo('auth');
		}
	},

	afterModel: function(model, transition) {
		var options = {
				atLeastOne: true,
				model: model
			};
			if (!this.get('auth').hasPermission(this.get('isPermissionRequired'), options)) {
				// TODO: show "no permission" message
				console.warn('no permission for "%s" on %o', transition.targetName, model.toJSON());
				// TODO: make redirect when login was previosly asked
				transition.abort();
			}
		}
	});
}

export default {
	name: 'auth',
	initialize: initialize
};
