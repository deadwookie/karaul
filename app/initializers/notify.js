// https://github.com/aexmachina/ember-notify
import Notify from 'ember-notify';

export function initialize(container) {
	Notify.useBootstrap();

	container.register('notify:main', Notify, {instantiate: false});

	container.injection('route', 'notify', 'notify:main');
	container.injection('controller', 'notify', 'notify:main');
	container.injection('model', 'notify', 'notify:main');
}

export default {
	name: 'notify',
	initialize: initialize
};
