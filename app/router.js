import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('inbox');
=======
  this.route('rules');
>>>>>>> origin/master
});

export default Router;
