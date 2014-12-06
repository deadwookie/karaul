import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('game', function(){
		this.route('inbox');
		this.route('log');
	});
	this.route('rules');
	this.route('top');
});

export default Router;
