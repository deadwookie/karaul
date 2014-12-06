import Ember from 'ember';
import config from '../config/environment';

export function initialize(container) {

	container.register('config:main', Ember.Object.extend(config.GAME));

	container.injection('route', 'config', 'config:main');
	container.injection('controller', 'config', 'config:main');
	container.injection('model', 'config', 'config:main');
}

export default {
	name: 'config',
	initialize: initialize
};
