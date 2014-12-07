import Ember from 'ember';
import config from '../config/environment';

export function initialize(container) {

	container.register('config:game', Ember.Object.extend(config.GAME));

	container.injection('route', 'config', 'config:game');
	container.injection('controller', 'config', 'config:game');
	container.injection('model', 'config', 'config:game');
}

export default {
	name: 'config',
	initialize: initialize
};
