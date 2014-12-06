import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('inbox');
  this.route('rules');
  this.route('log');
  this.route('top');
  this.route('task');
  this.route('tskill');
});

export default Router;
