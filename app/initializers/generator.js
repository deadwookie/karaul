import Generator from 'karaul/utils/generator';

export function initialize(container, application) {
	container.register('game:generator', Generator, {singleton: true});

	application.inject('game:generator', 'store', 'store:main');
	application.inject('game:generator', 'config', 'config:game');

	// Allow it in any controller
	application.inject('controller', 'generator', 'game:generator');
}

export default {
	name: 'generator',
	after: 'config',
	initialize: initialize
};
