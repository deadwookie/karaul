import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route('new', {path: '/new/:game'});

	this.resource('play', function() {
		this.resource('game', {path: '/:game'}, function() {
			this.resource('scrum');

			this.route('project');
			this.route('jobmarket');
			this.route('email');
			this.route('log');
		});
	});

	this.route('rules');
	this.route('top');
	this.route('task');
	this.route('sprint');
});

export default Router;
